# NVIDIA Review DNS Planning

## Purpose
This document outlines the theoretical DNS and routing strategies for exposing the `/nvidia-review` route to external stakeholders if authorized by Director Anderson. **No active DNS changes have been made.**

## Suggested Subdomain Routing
If the review experience needs a dedicated entry point without utilizing the main domain path, the following subdomains are recommended:
- `review.isystemsdirect.com`
- `nvidia.isystemsdirect.com`
- `inception.isystemsdirect.com`

## Infrastructure Options
1. **Firebase Hosting Rewrites**: 
   A custom Firebase target could rewrite traffic from a specific subdomain directly to the `/nvidia-review` route in the React application.
2. **Cloud Run / Edge Worker**:
   An edge worker could intercept traffic to a specific subdomain, append security headers, and reverse-proxy to the ISDI Firebase hosting, serving the specific route.

## Access Control Recommendations
If deployed publicly:
- Implement Firebase App Check.
- Consider basic auth or a magic-link token parameter to prevent casual discovery.
- Set `X-Robots-Tag: noindex, nofollow` HTTP headers on the subdomain.
