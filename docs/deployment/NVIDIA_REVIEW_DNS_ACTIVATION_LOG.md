# NVIDIA Review DNS Activation Log

## Deployment Summary
- **Authorized Subdomain:** `review.isystemsdirect.com`
- **Activation Status:** PREPARED (Awaiting Manual DNS Entry)
- **Target Infrastructure:** Firebase Hosting (`isystemsdirect.com` / `public-site`)

## Required DNS Records
The following records must be added to the Squarespace DNS dashboard to activate the review subdomain:

| Host | Type | Value | Priority |
| :--- | :--- | :--- | :--- |
| `review` | `CNAME` | `isystemsdirect.web.app` | N/A |
| **OR** | | | |
| `review` | `A` | `199.36.158.100` | N/A |

> [!IMPORTANT]
> Use the values provided in the Firebase Hosting console for the `public-site` target. The values above are standard Firebase Hosting targets.

## Routing Posture
- Traffic to `review.isystemsdirect.com` should be bound to the `public-site` Firebase Hosting target.
- The React application handles the `/nvidia-review` route internally.
- No direct rewrite to `/nvidia-review` is required at the DNS level; the subdomain provides a clean entry point (e.g., `review.isystemsdirect.com/nvidia-review`).

## TLS/SSL Status
- **SSL:** Enabled via Firebase Hosting automatically upon domain verification.
- **HSTS:** Enabled by default.
