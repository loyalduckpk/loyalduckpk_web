import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://aglngbhdzaftetvxqrch.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbG5nYmhkemFmdGV0dnhxcmNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkxNTAyOTAsImV4cCI6MjEwNDcyNjI5MH0.1t5mcS_lGCfP2LX3DsWyNKlRXGBQYccYsFlhk4T41pk';

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

    // Forward to Supabase Edge Function places-proxy
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(`${SUPABASE_URL}/functions/v1/places-proxy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    }).catch(() => null);

    clearTimeout(timeoutId);

    if (!response || !response.ok) {
      // Graceful fallback to manual entry on upstream failure
      return NextResponse.json(
        {
          success: false,
          fallback_to_manual: true,
          message: 'Google Places proxy unavailable. Please enter business details manually.',
          predictions: [],
        },
        { headers: NO_INDEX_HEADERS }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { headers: NO_INDEX_HEADERS });
  } catch {
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
