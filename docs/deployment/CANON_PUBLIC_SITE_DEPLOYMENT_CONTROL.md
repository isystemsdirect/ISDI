# Canonical Public Site Deployment Control
**Document Type:** Deployment Doctrine
**Authority:** Director Anderson / Scing
**Date:** 2026-05-07

## 1. Deployment Target
- **Canon Domain:** `https://isystemsdirect.com`
- **Firebase Project:** `woven-handbook-474516-b0`
- **Hosting Target:** `isdi-public`

## 2. Deployment Command
```bash
firebase deploy --only hosting:public-site
```
*Note: This command affects the canon site. Speculative deployment using this command is strictly forbidden.*

## 3. Pre-Deploy Requirements Checklist
Prior to executing a deployment to `isdi-public`, the following must be verified:
- [ ] **Director authorization** obtained.
- [ ] `git status` is clean or deviations are explicitly documented and approved.
- [ ] TypeScript typecheck passed.
- [ ] Build passed successfully.
- [ ] Asset sync completed (dual-root asset stems active).
- [ ] No source-deck exposure.
- [ ] No hidden NVIDIA route exposure.

## 4. Post-Deploy Apex Verification Checklist
After a successful deployment, the following must be verified directly on the apex domain:
- [ ] Verify `https://isystemsdirect.com` directly (NOT the alias).
- [ ] Verify apex HTML shell revalidation.
- [ ] Verify expected bundle fingerprint matches.
- [ ] Verify Header logo is present and uncorrupted.
- [ ] Verify OVERSCITE™ page if affected by the change.
- [ ] Verify BANE context gate if affected.
- [ ] Verify no public navigation drift.

## 5. Cache Policy Lock
The following `firebase.json` headers must be respected:
- `index.html`: `no-cache`
- `hashed_assets`: `public,max-age=31536000,immutable`
- `media_assets`: `public,max-age=3600`
