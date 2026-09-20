// loyalduckpk_web/src/lib/places.ts
// Client-side helper for Google Places (New) autocomplete and details with session billing

export interface PlacePrediction {
  place_id: string;
  primary_text: string;
  secondary_text: string;
  is_establishment: boolean;
  types: string[];
}

export interface PlaceDetail {
  place_id: string;
  name: string;
  formatted_address: string;
  city: string;
  latitude: number | null;
  longitude: number | null;
  business_status: string;
  types: string[];
  attribution: string;
}

let activeSessionToken: string | null = null;

export function startPlacesSession(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    activeSessionToken = crypto.randomUUID();
  } else {
    activeSessionToken = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  }
  return activeSessionToken;
}

export function endPlacesSession(): void {
  activeSessionToken = null;
}

let activeSearchController: AbortController | null = null;

export async function searchPlaces(
  query: string,
  sessionToken?: string
): Promise<{ predictions: PlacePrediction[]; attribution: string; fallback_to_manual: boolean }> {
  const trimmed = query.trim();
  if (trimmed.length < 2) {
    if (activeSearchController) {
      activeSearchController.abort();
      activeSearchController = null;
    }
    return { predictions: [], attribution: 'Powered by Google', fallback_to_manual: false };
  }

  // Cancel prior pending search request to prevent race conditions
  if (activeSearchController) {
    activeSearchController.abort();
  }
  const controller = new AbortController();
  activeSearchController = controller;

  const token = sessionToken || activeSessionToken || startPlacesSession();

  // Enforce a strict 3.5s timeout on search requests
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, 3500);

  try {
    const res = await fetch('/api/onboarding/places', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        action: 'autocomplete',
        query: trimmed,
        session_token: token,
        country: 'pk',
      }),
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return { predictions: [], attribution: 'Powered by Google', fallback_to_manual: true };
    }

    const data = await res.json();
    return {
      predictions: data.predictions || [],
      attribution: data.attribution || 'Powered by Google',
      fallback_to_manual: Boolean(data.fallback_to_manual),
    };
  } catch (err: unknown) {
    clearTimeout(timeoutId);
    // If aborted due to newer keystroke, return gracefully
    if (err instanceof DOMException && err.name === 'AbortError') {
      return { predictions: [], attribution: 'Powered by Google', fallback_to_manual: false };
    }
    return { predictions: [], attribution: 'Powered by Google', fallback_to_manual: true };
  } finally {
    if (activeSearchController === controller) {
      activeSearchController = null;
    }
  }
}

export async function getPlaceDetails(
  placeId: string,
  sessionToken?: string
): Promise<PlaceDetail | null> {
  if (!placeId) return null;

  const token = sessionToken || activeSessionToken;
  // Terminate session token after selection
  endPlacesSession();

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, 4000);

  try {
    const res = await fetch('/api/onboarding/places', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        action: 'details',
        place_id: placeId,
        session_token: token,
      }),
    });

    clearTimeout(timeoutId);

    if (!res.ok) return null;

    const data = await res.json();
    if (!data.success) return null;

    return {
      place_id: data.place_id,
      name: data.name,
      formatted_address: data.formatted_address,
      city: data.city,
      latitude: data.latitude,
      longitude: data.longitude,
      business_status: data.business_status || 'OPERATIONAL',
      types: data.types || [],
      attribution: data.attribution || 'Powered by Google',
    };
  } catch {
    clearTimeout(timeoutId);
    return null;
  }
}
