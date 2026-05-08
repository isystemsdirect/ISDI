# PUBLIC_SITE_ASSET_STEM_MANIFEST.md

This document defines the governed relationship between the repository root canonical asset library and the `public-site` runtime media mirror.

## Asset Roots
- **Canonical Source Root**: `public/images/`
- **Runtime Mirror Root**: `apps/public-site/public/media/`
- **Browser Path Prefix**: `/media/`

## Manifest Entries

| Asset Name | Canonical Source Path | Runtime Mirror Path | Browser Path | Role / Usage | Mutation Rule | Verification Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OVERSCITE Logo** | `public/images/png/overscite_logo.png` | `apps/public-site/public/media/overscite_logo.png` | `/media/overscite_logo.png` | Primary brand identity for OVERSCITE page. | **PROTECTED**: Do not recreate, simplify, or alter. | VERIFIED |
| **ISDI Logo** | `public/images/png/ISDI_Color_Trans.png` | `apps/public-site/public/media/isdi_brand_logo.png` | `/media/isdi_brand_logo.png` | Corporate branding. | DO NOT ALTER | VERIFIED |
| **OVERSCITE Preview** | `public/images/png/overscite_preview.png` | `apps/public-site/public/media/overscite_preview.png` | `/media/overscite_preview.png` | Interface visual for OVERSCITE page. | Maintain Ultra-Grade quality. | PENDING SYNC |
| **OVERSCITE Background** | `public/images/jpeg/bckgrnd004.jpeg` | `apps/public-site/public/media/overscite.jpeg` | `/media/overscite.jpeg` | General page visual. | DO NOT ALTER | VERIFIED |
| **Hero Image** | `public/images/jpeg/bckgrnd005.jpeg` | `apps/public-site/public/media/hero.jpeg` | `/media/hero.jpeg` | Main site hero background. | DO NOT ALTER | VERIFIED |
| **Reporting Image** | `public/images/jpeg/bckgrnd001.jpeg` | `apps/public-site/public/media/reporting.jpeg` | `/media/reporting.jpeg` | Reporting feature visual. | DO NOT ALTER | VERIFIED |
| **Governance Image** | `public/images/jpeg/bckgrnd007.jpeg` | `apps/public-site/public/media/governance.jpeg` | `/media/governance.jpeg` | Governance feature visual. | DO NOT ALTER | VERIFIED |

## Sync Policy
1. All public-site runtime media MUST stem from a verified canonical source in `public/images/`.
2. The `scripts/sync-public-site-assets.mjs` script performs a controlled copy from source to mirror before build.
3. If an asset is missing in source but present in mirror, it must be archived back to source before being considered canonical.
4. Logos are strictly protected; any variation from source lineage is a governance violation.

## Maintenance
- **Last Audit**: 2026-05-07
- **Auditor**: Antigravity
- **Authority**: Scing / Director Anderson
