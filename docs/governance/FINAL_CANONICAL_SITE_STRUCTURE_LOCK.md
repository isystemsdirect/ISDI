# Final Canonical Site Structure Lock
**Document Type:** Governance Freeze Document
**Authority:** Director Anderson / Scing
**Date:** 2026-05-07

## 1. Canon Site Identity
The domain **isystemsdirect.com** is hereby established and locked as the absolute canon public-site surface. 

## 2. Live Deployment Authority
The Firebase target `isdi-public` is definitively the live deployment target for the canon site. Any deployment to this target is a **canon-live mutation**.

The alias domain **isdi-public.web.app** is an alias/preview surface of the SAME live deployment target. It is **NOT** a safe independent lab. Actions taken on or deployed to `isdi-public.web.app` affect the canon live site directly.

## 3. Live-Mutation Control
Future changes to the public site require **Director authorization**. Visible public-site mutations must use a new UTCB-S (or equivalent approved packet).

## 4. Cache Control Posture
The following Firebase Hosting cache behaviors are verified, corrected, and locked to prevent stale edge caches causing missing-element conditions:
- `index.html`: `Cache-Control: no-cache`
- Hashed assets (`**/*.@(js|css)`): `Cache-Control: public,max-age=31536000,immutable`
- Media assets (`/media/**`): `Cache-Control: public,max-age=3600`

Cache headers must remain locked unless a verified infrastructure issue requires revision.
