# NVIDIA Review DNS Activation Log

## Deployment Summary
- **Authorized Subdomain:** `review.isystemsdirect.com`
- **Activation Status:** PENDING (DNS Resolution Check: FAILED on 2026-05-07)
- **Primary Hosting Site:** `isdi-public-site` (Target: `public-site`)

## Diagnostic Findings (2026-05-07)
1. **RC: DNS Not Resolved:** `nslookup` confirmed the subdomain is not yet active in public DNS.
2. **RC: Root Redirect:** Added `ReviewSubdomainRedirect` logic to `App.tsx` to handle bare root requests to the review subdomain.
3. **Action Required:** Manual entry of A/CNAME records in Squarespace dashboard is required to proceed to PP10-F verification.

## Required DNS Records
The following records must be added to the Squarespace DNS dashboard:

| Host | Type | Value | Priority |
| :--- | :--- | :--- | :--- |
| `review` | `CNAME` | `isdi-public-site.web.app` | N/A |
| **OR** | | | |
| `review` | `A` | `199.36.158.100` | N/A |

> [!IMPORTANT]
> Ensure the domain `review.isystemsdirect.com` is explicitly added as a custom domain to the `isdi-public-site` Firebase Hosting target.

## Routing Posture
- Traffic to `review.isystemsdirect.com` is bound to the `public-site` target.
- Root requests (`/`) on this hostname are automatically redirected to `/nvidia-review` via the app-level `ReviewSubdomainRedirect`.
