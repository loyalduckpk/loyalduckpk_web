import { NextRequest, NextResponse } from 'next/server';
import https from 'node:https';

/**
 * Loyal Duck — Server-side Google Places API (New) Proxy
 * 
 * Direct server-to-Google integration:
 * 1. Autocomplete with session billing and Pakistan region lock (includedRegionCodes: ['pk'])
 * 2. Place Details with narrow field mask (id, displayName, formattedAddress, addressComponents, location, businessStatus, types)
 * 3. Enforces IPv4 (family: 4) to prevent Node.js ETIMEDOUT on dual-stack environments
 * 4. Graceful fallback to manual entry on network errors or timeouts
 * 5. Zero client secret disclosure (Google Maps API key stays server-side)
 */

const GOOGLE_PLACES_API_KEY =
  process.env.GOOGLE_PLACES_API_KEY ||
  process.env.GOOGLE_MAPS_API_KEY ||
  'AIzaSyD0o9M4VqPxcJCwIpvxGQ4I2y9B9-PKH6Y';

const NARROW_FIELD_MASK =
  'id,displayName,formattedAddress,addressComponents,location,businessStatus,types';

const BUSINESS_TYPE_KEYWORDS = new Set([
  'establishment', 'point_of_interest', 'food', 'restaurant', 'cafe', 'bakery',
  'store', 'clothing_store', 'convenience_store', 'department_store', 'electronics_store',
  'grocery_or_supermarket', 'supermarket', 'shopping_mall', 'meal_takeaway', 'meal_delivery',
  'bar', 'beauty_salon', 'hair_care', 'spa', 'gym', 'health', 'pharmacy',
  'car_repair', 'car_wash', 'laundry', 'lodging', 'hotel', 'service',
]);

function isBusinessEstablishment(types: string[]): boolean {
  if (!Array.isArray(types) || types.length === 0) return true;
  return types.some((t) => BUSINESS_TYPE_KEYWORDS.has(t));
}

function extractCity(addressComponents: Array<{ types?: string[]; longText?: string; shortText?: string }>): string {
  if (!Array.isArray(addressComponents)) return 'Unknown';

  for (const comp of addressComponents) {
    const types = comp.types || [];
    if (types.includes('locality')) {
      return comp.longText || comp.shortText || '';
    }
  }

  for (const comp of addressComponents) {
    const types = comp.types || [];
    if (types.includes('administrative_area_level_2')) {
      return comp.longText || comp.shortText || '';
    }
  }

  for (const comp of addressComponents) {
    const types = comp.types || [];
    if (types.includes('postal_town') || types.includes('sublocality_level_1')) {
      return comp.longText || comp.shortText || '';
    }
  }

  return 'Unknown';
}

function requestGooglePlaces<T>(
  urlStr: string,
  method: 'GET' | 'POST',
  headers: Record<string, string>,
  postData?: string
): Promise<{ status: number; data: T }> {
  return new Promise((resolve, reject) => {
    const url = new URL(urlStr);
    const req = https.request(
      url,
      {
        method,
        family: 4, // Force IPv4 to prevent IPv6 connection hangs
        timeout: 5000,
        headers: {
          ...headers,
          ...(postData ? { 'Content-Length': Buffer.byteLength(postData) } : {}),
        },
      },
      (res) => {
        let raw = '';
        res.on('data', (chunk) => {
          raw += chunk;
        });
        res.on('end', () => {
          try {
            const data = JSON.parse(raw);
            resolve({ status: res.statusCode || 200, data });
          } catch (e) {
            reject(new Error(`Failed to parse response: ${e}`));
          }
        });
      }
    );

    req.on('timeout', () => {
      req.destroy(new Error('REQUEST_TIMEOUT'));
    });

    req.on('error', reject);

    if (postData) {
      req.write(postData);
    }
    req.end();
  });
}

const NO_INDEX_HEADERS = { 'X-Robots-Tag': 'noindex, nofollow' };

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const action = body.action;

    if (!action || (action !== 'autocomplete' && action !== 'details' && action !== 'health')) {
      return NextResponse.json(
        { error: 'Invalid or unsupported action' },
        { status: 400, headers: NO_INDEX_HEADERS }
      );
    }

    if (action === 'health') {
      return NextResponse.json(
        { status: 'ok', provider: 'google_places_new_ipv4', timestamp: new Date().toISOString() },
        { headers: NO_INDEX_HEADERS }
      );
    }

    // 1. Autocomplete action
    if (action === 'autocomplete') {
      const query = typeof body.query === 'string' ? body.query.trim() : '';
      const sessionToken = typeof body.session_token === 'string' ? body.session_token.trim() : null;
      const country = typeof body.country === 'string' ? body.country.trim().toLowerCase() : 'pk';

      if (query.length < 2) {
        return NextResponse.json(
          { success: true, predictions: [], attribution: 'Powered by Google' },
          { headers: NO_INDEX_HEADERS }
        );
      }

      const payload: Record<string, unknown> = {
        input: query,
        includedRegionCodes: [country],
      };
      if (sessionToken) {
        payload.sessionToken = sessionToken;
      }

      try {
        const postData = JSON.stringify(payload);
        const resp = await requestGooglePlaces<{
          suggestions?: Array<{
            placePrediction?: {
              placeId?: string;
              text?: { text?: string };
              structuredFormat?: { mainText?: { text?: string }; secondaryText?: { text?: string } };
              types?: string[];
            };
          }>;
        }>(
          'https://places.googleapis.com/v1/places:autocomplete',
          'POST',
          {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': GOOGLE_PLACES_API_KEY,
          },
          postData
        );

        if (resp.status >= 400) {
          console.error(`Google Places autocomplete HTTP error: ${resp.status}`);
          return NextResponse.json(
            {
              success: false,
              fallback_to_manual: true,
              message: 'Google Places search unavailable. Please enter details manually.',
              predictions: [],
            },
            { headers: NO_INDEX_HEADERS }
          );
        }

        const rawSuggestions = resp.data.suggestions || [];
        const predictions = rawSuggestions
          .filter((s) => Boolean(s.placePrediction?.placeId))
          .map((s) => {
            const p = s.placePrediction!;
            const types: string[] = p.types || [];
            return {
              place_id: p.placeId || '',
              primary_text: p.structuredFormat?.mainText?.text || p.text?.text || '',
              secondary_text: p.structuredFormat?.secondaryText?.text || '',
              is_establishment: isBusinessEstablishment(types),
              types: types,
            };
          });

        return NextResponse.json(
          {
            success: true,
            predictions,
            attribution: 'Powered by Google',
            session_token: sessionToken,
            fallback_to_manual: predictions.length === 0,
          },
          { headers: NO_INDEX_HEADERS }
        );
      } catch (err: unknown) {
        console.error('Places autocomplete error:', err);
        return NextResponse.json(
          {
            success: false,
            fallback_to_manual: true,
            message: 'Places search unavailable. You can enter details manually.',
            predictions: [],
          },
          { headers: NO_INDEX_HEADERS }
        );
      }
    }

    // 2. Place Details action
    if (action === 'details') {
      const placeId = typeof body.place_id === 'string' ? body.place_id.trim() : '';
      const sessionToken = typeof body.session_token === 'string' ? body.session_token.trim() : null;

      if (!placeId) {
        return NextResponse.json(
          { error: 'place_id is required' },
          { status: 400, headers: NO_INDEX_HEADERS }
        );
      }

      let detailsUrl = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
      if (sessionToken) {
        detailsUrl += `?sessionToken=${encodeURIComponent(sessionToken)}`;
      }

      try {
        const resp = await requestGooglePlaces<{
          id?: string;
          displayName?: { text?: string };
          formattedAddress?: string;
          addressComponents?: Array<{ types?: string[]; longText?: string; shortText?: string }>;
          location?: { latitude?: number; longitude?: number };
          businessStatus?: string;
          types?: string[];
        }>(
          detailsUrl,
          'GET',
          {
            'X-Goog-Api-Key': GOOGLE_PLACES_API_KEY,
            'X-Goog-FieldMask': NARROW_FIELD_MASK,
          }
        );

        if (resp.status >= 400) {
          console.error(`Google Places details HTTP error: ${resp.status}`);
          return NextResponse.json(
            {
              success: false,
              fallback_to_manual: true,
              message: 'Unable to retrieve place details. Please enter details manually.',
            },
            { headers: NO_INDEX_HEADERS }
          );
        }

        const data = resp.data;
        const city = extractCity(data.addressComponents || []);
        const lat = data.location?.latitude ?? null;
        const lng = data.location?.longitude ?? null;

        return NextResponse.json(
          {
            success: true,
            place_id: data.id || placeId,
            name: data.displayName?.text || '',
            formatted_address: data.formattedAddress || '',
            city: city,
            latitude: lat,
            longitude: lng,
            business_status: data.businessStatus || 'OPERATIONAL',
            types: data.types || [],
            attribution: 'Powered by Google',
            fallback_to_manual: false,
          },
          { headers: NO_INDEX_HEADERS }
        );
      } catch (err: unknown) {
        console.error('Places details error:', err);
        return NextResponse.json(
          {
            success: false,
            fallback_to_manual: true,
            message: 'Place details request unavailable. You can enter details manually.',
          },
          { headers: NO_INDEX_HEADERS }
        );
      }
    }

    return NextResponse.json({ error: 'Unsupported action' }, { status: 400, headers: NO_INDEX_HEADERS });
  } catch (err: unknown) {
    console.error('Places proxy unexpected error:', err);
    return NextResponse.json(
      {
        success: false,
        fallback_to_manual: true,
        message: 'Failed to process request. Please enter business details manually.',
        predictions: [],
      },
      { headers: NO_INDEX_HEADERS }
    );
  }
}
