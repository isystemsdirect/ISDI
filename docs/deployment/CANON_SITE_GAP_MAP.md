# CANON_SITE_GAP_MAP.md

**Date:** 2026-05-07
**Comparison:** `isdi-public.web.app` (Staging) vs `isystemsdirect.com` (Canon)

## 1. Feature Parity Assessment
Because both the staging URL and the canon URL are bound to the exact same Firebase Hosting project instance (`woven-handbook-474516-b0`, target `isdi-public`), there is zero deployment-level gap between the two surfaces.

| Feature / Element | Staging (`isdi-public.web.app`) | Canon (`isystemsdirect.com`) | Gap Status |
| :--- | :--- | :--- | :--- |
| **UG-UIX Motion & GlassPanels** | ACTIVE | ACTIVE | NO GAP |
| **BANE Context Gate** | ACTIVE | ACTIVE | NO GAP |
| **OVERSCITE™ Logo Alignment** | ACTIVE | ACTIVE | NO GAP |
| **Dual-Root Asset Stem** | ACTIVE | ACTIVE | NO GAP |
| **Ecosystem Access (Scing Orb)** | ACTIVE | ACTIVE | NO GAP |

## 2. Perceived Gap Analysis
The perceived "clean slate" gap reported on `isystemsdirect.com` is determined to be a client-side artifact.

**Missing Canon Elements Identified by User:**
- Upgraded mouse behavior
- BANE controlled context menu
- UG-UIX motion
- OVERSCITE™ recovery elements

**True State:**
A headless architectural sweep of the canon domain confirms all these elements *are* present and being served. The perception of missing elements requires a local hard cache clear (`Ctrl+F5` / `Cmd+Shift+R`) on the examining client machine, or a Firebase CDN invalidation cycle.

## 3. Preservation Requirements
- The repository build pipeline is the exclusive source of truth for the canon site.
- No parallel CMS or legacy Squarespace site needs preservation or migration.
- The `www.isystemsdirect.com` DNS entry is currently missing and should be formally bound to Firebase in the future, but the apex domain is fully canonical.
