# Context Action Policy (BANE)

## 1. Scope of Context Gate
The BANE Site Context Action Gate intercepts the native `contextmenu` event to prevent unauthorized interactions such as "Save Image As...", "Copy Image Address", or casual DOM inspection. This acts as a soft governance barrier and establishes a professional, locked-down media posture.

## 2. Browser Security Limits
This is a UI-level constraint, NOT a cryptographic DRM solution.
- Advanced users can still access browser Developer Tools via keyboard shortcuts (F12, Ctrl+Shift+I).
- Network traffic can still be intercepted to extract assets.
- Users can take system-level screenshots.

## 3. Contextual Enforcement
BANE enforcement levels scale based on the sensitivity of the site surface:
- **STRICT (Standard):** Applied to the general public-site surfaces. Provides standard authorized pathways.
- **MAXIMUM (Sensitive):** Applied to internal review surfaces (e.g., `/nvidia-review`). Restricts interaction and provides specialized legal and authorization pathways.

## 4. Authorized Pathways
The Context Gate replaces native menus with ISDI-approved actions:
- **OVERSCITE Preview:** Directs users to the platform staging environment.
- **SCINGULAR Architecture:** Directs users to architectural disclosures.
- **Contact ISDI:** General inquiry pathway.
- **View Disclosure Notice:** Legal disclaimers and terms.
- **Report Issue:** Technical or governance reporting.
- **Request Media Authorization:** Formal pathway for asset usage requests.

## 5. Source Integrity & Privacy
*   **Discovery Restriction**: Any attempt to navigate to `archive/`, `private-reference/`, or internal `intelligence/` doctrine files via URL manipulation is prohibited.
*   **Response**: BANE MAXIMUM. Immediate redirection to the site root with a "GOVERNANCE BOUNDARY EXCEEDED" log entry.
*   **Proprietary Protection**: The NVIDIA Source Deck and associated tactical artifacts are strictly off-limits to all public-site interaction pathways.
