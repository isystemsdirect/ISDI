# WWW DNS Repair Log
**Document Type:** DNS Modification Record
**Authority:** Director Anderson / Scing
**Date:** 2026-05-07

## 1. Pre-DNS State Capture (P0)
- **Apex Domain (`isystemsdirect.com`):** Resolves to A record `199.36.158.100` (Firebase Hosting).
- **Subdomain (`www.isystemsdirect.com`):** Resolves to NXDOMAIN (No A or CNAME records found).
- **Firebase Project:** `woven-handbook-474516-b0`
- **Firebase Hosting Target:** `isdi-public`

## 2. Firebase Custom Domain Binding (P1)
*(Pending human intervention via Firebase Console)*
- **Action Required:** Add `www.isystemsdirect.com` to the `isdi-public` site in the Firebase Hosting console.
- **Firebase Instruction:** Awaiting Firebase to provide required DNS records (A, TXT, or CNAME).

## 3. Squarespace DNS Record Update (P2)
*(Pending human intervention via Squarespace)*
- **Action Required:** Add the Firebase-provided records for Host `www` to Squarespace DNS.

## 4. Canonical Redirect Posture (P3)
- **Preferred Configuration:** Configure Firebase Console to redirect `www.isystemsdirect.com` to the apex `https://isystemsdirect.com`.

## 5. DNS Propagation and TLS Verification (P4)
- **DNS Resolution:** Currently returning NXDOMAIN. Propagation is still pending.
- **TLS/SSL Status:** Pending DNS resolution.
- **Redirect Status:** Pending DNS resolution.

## 6. Governance Exposure Verification (P5)
- **Source Code:** Unchanged.
- **Content:** Unchanged.
- **Cache Headers:** Unchanged.
- **Hidden Routes/Source Deck:** Unexposed.
