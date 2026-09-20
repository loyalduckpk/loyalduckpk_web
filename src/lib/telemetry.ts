/**
 * Loyal Duck — Coarse Funnel Telemetry (First-Party)
 * 
 * Records coarse onboarding milestone events without tracking PII,
 * raw search inputs, contact details, or credentials.
 */

export type TelemetryEventName =
  | 'onboarding_started'
  | 'onboarding_search_selected'
  | 'onboarding_reward_configured'
  | 'onboarding_handoff_initiated'
  | 'onboarding_handoff_completed'
  | 'onboarding_handoff_failed';

export interface TelemetryPayload {
  method?: 'google' | 'google_autocomplete' | 'manual';
  place_id_present?: boolean;
  program_type?: 'visits' | 'points';
  operating_model?: string;
  duration_ms?: number;
  status?: string;
  success?: boolean;
  reason_code?: string;
  [key: string]: unknown;
}

class OnboardingTelemetry {
  private startTime: number = Date.now();

  startSession() {
    this.startTime = Date.now();
    this.track('onboarding_started', { timestamp: this.startTime });
  }

  getElapsedMs(): number {
    return Math.max(0, Date.now() - this.startTime);
  }

  getDurationMs(): number {
    return this.getElapsedMs();
  }

  track(name: TelemetryEventName, payload: TelemetryPayload = {}) {
    if (typeof window === 'undefined') return;

    const event = {
      name,
      ...payload,
      duration_ms: payload.duration_ms ?? this.getElapsedMs(),
    };

    // Log to structured diagnostic stream in development / preview
    if (process.env.NODE_ENV !== 'production') {
      console.info('[TELEMETRY]', name, {
        ...event,
        url: window.location.pathname,
      });
    }

    // Dispatch custom event for extensible client measurement
    try {
      window.dispatchEvent(
        new CustomEvent('loyalduck:telemetry', {
          detail: event,
        })
      );
    } catch {
      // Non-blocking telemetry
    }
  }
}

export const telemetry = new OnboardingTelemetry();
