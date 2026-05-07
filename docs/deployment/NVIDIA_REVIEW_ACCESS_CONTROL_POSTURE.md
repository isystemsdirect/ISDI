# NVIDIA Review Access Control Posture

## 1. Interaction Gate
The `/nvidia-review` route is protected by a frontend `PasscodeGate`. 
- **Requirement:** Stakeholders must enter a valid access code to view the experience.
- **Default Code:** `ISDI-NV-2026`
- **Logic:** Client-side state (React) prevents the mounting of the experience components until the passcode is verified.

## 2. Crawler Privacy (SEO)
To prevent accidental discovery via search engines, the following guardrails are active:
- **Meta Tags:** `noindex, nofollow` is dynamically injected into the document head upon route entry.
- **Robots.txt:** `/nvidia-review` is explicitly disallowed for all user-agents.
- **Sitemap:** The route is excluded from all sitemap generation processes.

## 3. Linkage Posture
- **Hidden Link Only:** The route is NOT present in any public navigation (Header, Footer, or CTAs).
- **Subdomain Entry:** Access is intended via `review.isystemsdirect.com/nvidia-review`.
- **Target Site:** Bound to `isdi-public` Firebase Hosting site.

## 4. Source Privacy
- **Source Deck Isolation:** The proprietary source deck remains in `archive/proprietary/` and is never served or linked by the application.
- **Distilled Intelligence:** Only public-safe, re-authored content from `ScingVoiceData.ts` is rendered in the UI.
