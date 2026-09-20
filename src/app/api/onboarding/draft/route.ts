import { NextRequest, NextResponse } from 'next/server';

interface SaveDraftBody {
  business_name: string;
  category: string;
  operating_model?: string;
  city?: string;
  street_address?: string | null;
  place_id?: string | null;
  program_type?: 'visits' | 'points';
  reward_name: string;
  visit_threshold?: number;
  spend_unit_cents?: number | null;
  points_cost?: number | null;
  provenance?: string;
  contact_email?: string | null;
  representative_name?: string | null;
  password?: string | null;
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://aglngbhdzaftetvxqrch.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbG5nYmhkemFmdGV0dnhxcmNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkxNTAyOTAsImV4cCI6MjEwNDcyNjI5MH0.1t5mcS_lGCfP2LX3DsWyNKlRXGBQYccYsFlhk4T41pk';

const NO_INDEX_HEADERS = { 'X-Robots-Tag': 'noindex, nofollow' };

export async function POST(req: NextRequest) {
  try {
    const body: SaveDraftBody = await req.json();

    // 1. Validation
    if (!body.business_name || !body.business_name.trim()) {
      return NextResponse.json(
        { error: 'Business name is required.' },
        { status: 400, headers: NO_INDEX_HEADERS }
      );
    }
    if (!body.category || !body.category.trim()) {
      return NextResponse.json(
        { error: 'Category is required.' },
        { status: 400, headers: NO_INDEX_HEADERS }
      );
    }
    if (!body.reward_name || !body.reward_name.trim()) {
      return NextResponse.json(
        { error: 'Reward name is required.' },
        { status: 400, headers: NO_INDEX_HEADERS }
      );
    }

    const cleanEmail = body.contact_email?.trim() ? body.contact_email.trim().toLowerCase() : null;

    let authSession: { access_token: string; refresh_token: string } | null = null;

    // 2. If password provided alongside email, provision the merchant representative account in Supabase Auth
    if (cleanEmail && body.password && body.password.length >= 6) {
      try {
        await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
          },
          body: JSON.stringify({
            email: cleanEmail,
            password: body.password,
            data: {
              display_name: body.representative_name?.trim() || body.business_name.trim(),
            },
          }),
          signal: AbortSignal.timeout(4000),
        });
      } catch (authErr) {
        console.warn('Optional auth signup warning (will proceed with draft):', authErr);
      }

      // Automatically sign in to get active session tokens
      try {
        const tokenRes = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
          },
          body: JSON.stringify({
            email: cleanEmail,
            password: body.password,
          }),
          signal: AbortSignal.timeout(4000),
        });

        if (tokenRes.ok) {
          const tokenData = await tokenRes.json();
          if (tokenData.access_token && tokenData.refresh_token) {
            authSession = {
              access_token: tokenData.access_token,
              refresh_token: tokenData.refresh_token,
            };
          }
        }
      } catch (tokenErr) {
        console.warn('Optional token fetch warning:', tokenErr);
      }
    }

    const payload = {
      p_business_name: body.business_name.trim().slice(0, 90),
      p_category: body.category.trim().slice(0, 60),
      p_operating_model: body.operating_model || 'fixed',
      p_primary_city: (body.city || 'Lahore').trim().slice(0, 80),
      p_street_address: body.street_address ? body.street_address.trim() : null,
      p_place_id: body.place_id ? body.place_id.trim() : null,
      p_program_type: body.program_type || 'visits',
      p_reward_name: body.reward_name.trim().slice(0, 120),
      p_visit_threshold: body.visit_threshold || 5,
      p_spend_unit_cents: body.spend_unit_cents || null,
      p_points_cost: body.points_cost || null,
      p_provenance: body.provenance || 'website_wizard',
      p_contact_email: cleanEmail,
    };

    // 3. Call Supabase save_onboarding_draft RPC with 5s timeout
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/save_onboarding_draft`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      signal: AbortSignal.timeout(5000),
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Supabase save_onboarding_draft error:', errorText);
      return NextResponse.json(
        { error: 'Failed to save setup draft. Please try again or copy your plan.' },
        { status: response.status, headers: NO_INDEX_HEADERS }
      );
    }

    const data = await response.json();

    // 4. Return draft handle, confirmed contact email, and active session if available
    return NextResponse.json(
      {
        success: true,
        draft_id: data.draft_id,
        handoff_token: data.handoff_token,
        expires_at: data.expires_at,
        contact_email: cleanEmail,
        session: authSession,
      },
      { headers: NO_INDEX_HEADERS }
    );
  } catch (err: unknown) {
    console.error('Save draft error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred while saving your draft.' },
      { status: 500, headers: NO_INDEX_HEADERS }
    );
  }
}
