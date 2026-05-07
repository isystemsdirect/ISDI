# NVIDIA Review DNS Activation Log

## Deployment Summary
- **Authorized Subdomain:** `review.isystemsdirect.com`
- **Activation Status:** DEPLOYED / DNS PENDING
- **Verified Hosting Project:** `woven-handbook-474516-b0`
- **Verified Hosting Site:** `isdi-public`

## Required DNS Records (Squarespace)
To activate the subdomain, add the following record to the Squarespace DNS dashboard:

| Host | Type | Value | Priority |
| :--- | :--- | :--- | :--- |
| `review` | `A` | `199.36.158.100` | N/A |
| **OR** | | | |
| `review` | `CNAME` | `isdi-public.web.app` | N/A |

## Verification Status (2026-05-07)
1. **Deploy:** Latest build with host-aware redirect (9fedb9c) successfully deployed to `isdi-public`.
2. **DNS:** `nslookup review.isystemsdirect.com` returns NXDOMAIN. Manual entry required.
3. **App Logic:** Root redirect `review.isystemsdirect.com/` -> `/nvidia-review` is live in the deployment.
