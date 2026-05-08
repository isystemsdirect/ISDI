# STAGING_TO_CANON_REALIGNMENT_PLAN.md

**Date:** 2026-05-07
**Target:** isystemsdirect.com

## 1. Current State Realignment
The initial assumption that `isystemsdirect.com` was hosted on an independent clean-slate CMS (e.g., Squarespace Pages) has been **invalidated**. The domain is actively bound to the `isdi-public` Firebase Hosting target. Therefore, any deployment to the staging pipeline (`isdi-public.web.app`) automatically propogates to the canon domain.

## 2. Deployment Path Decision
**Selected Path:** Option D - Hold
**Description:** Keep `isystemsdirect.com` unchanged and continue Firebase as preview/lab.

**Rationale:**
Because the DNS is already cut over, there is no migration required. However, to respect the authorization limits, we must not push any further speculative UI features to the `public-site` repo target until the Director gives explicit canon-live approval, as those changes will immediately impact the canon domain.

## 3. Recommended Safest Next Steps
1. **Client-Side Cache Invalidation:** The observer (User/Director) must perform a hard refresh (`Ctrl+F5`) on `isystemsdirect.com` to clear the stale local cache that masks the current deployment.
2. **WWW Subdomain Binding:** Execute a future infrastructure task to bind `www.isystemsdirect.com` to Firebase Hosting and configure a redirect to the apex domain, as the `www` record currently returns `NXDOMAIN`.
3. **Execution Pause:** Halt all public-site visual mutation tasks. The repository `public-site` is now confirmed as live production architecture. Any future upgrades should be feature-flagged or built on a true separate Firebase project staging environment before merging to the `isdi-public` target.
