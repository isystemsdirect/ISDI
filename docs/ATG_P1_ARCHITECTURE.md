# ATG P1: ISDI Public Site Architecture

## Deployment Posture

**Environment**: Firebase Hosting / Cloud Run (Standard OVERSCITE platform deployment route).  
**Primary Domain**: `isystemsdirect.com`  
**DNS Handoff**: Managed via Squarespace DNS. A and CNAME records must map to Firebase Hosting per standard deployment governance.

## Hidden Route Configuration

The `/nvidia-review` route is intentionally excluded from:
1. All public navigation menus (`Header.tsx`, `Footer.tsx`).
2. Global `robots.txt` indexation.
3. XML Sitemaps.

It relies on a single obfuscated `href` embedded in a contextual paragraph, marked explicitly with `rel="nofollow noindex"`.

## Verification Commands
To build and verify the local structure before deployment:
```bash
npm install
npm run lint
npm run build
npm run dev
```

## ATG Phase 6 Addendum
- **UG-UIX Lock**: All experimental UG-UIX stems componentized in P4 are strictly isolated to the `/nvidia-review` route.
- **Sitewide Freeze**: The `isystemsdirect.com` global color scheme, navigation structure, and brand identity are structurally locked. No UIX features may leak outside the hidden route without a new UTCB authorization.
