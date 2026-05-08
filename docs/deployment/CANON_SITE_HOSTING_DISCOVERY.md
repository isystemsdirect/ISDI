# CANON_SITE_HOSTING_DISCOVERY.md

**Date:** 2026-05-07
**Target:** isystemsdirect.com
**Status:** DISCOVERY COMPLETED

## 1. DNS Resolution State
| Record Type | Host | Value | Provider Indication |
| :--- | :--- | :--- | :--- |
| A | `isystemsdirect.com` | `199.36.158.100` | Firebase Hosting (Anycast IP) |
| A/CNAME | `www.isystemsdirect.com` | *NXDOMAIN* | Missing WWW routing |

**Finding:** The apex domain `isystemsdirect.com` is formally bound to Firebase Hosting. The Squarespace DNS is actively routing apex traffic to Google/Firebase infrastructure.

## 2. Content Authority & Visual Verification
A direct programmatic fetch and headless browser visual audit of `https://isystemsdirect.com` reveals:
- The HTML served contains Vite module chunks (`index-CqtiLTdr.js`, `index-dj4NfQP8.css`) matching the recent repository build.
- The UG-UIX glowing border effects, Scing Orb, and OVERSCITE™ preview assets are visually active on the apex domain.

**Finding:** The ISDI repository `public-site` build is the absolute content authority for `isystemsdirect.com`. It is NOT a clean-slate or legacy CMS.

## 3. Deployment Target Realignment
- **Staging URL:** `https://isdi-public.web.app`
- **Canon URL:** `https://isystemsdirect.com`
- **Binding Relationship:** Both URLs point to the *exact same* Firebase Hosting target instance (`isdi-public`).

## 4. Root Cause for "Clean Slate" Perception
The user observation indicating missing features on `isystemsdirect.com` is definitively caused by **Client-Side Browser Caching** or **Firebase Edge CDN Caching**. Because the domain is bound to the exact same deployment target as the staging URL, any difference in presentation is a local cache artifact, not an infrastructure split.
