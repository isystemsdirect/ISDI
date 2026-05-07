# NVIDIA Review Route Exposure Policy

## Current Posture: Hidden-Link Only
The `/nvidia-review` route is actively deployed with the ISDI public site bundle but is strictly governed by a "Hidden-Link Only" policy.

## Strict Exposure Rules
1. **No Navigation Integration**: The route must never be linked from the global header, footer, or any public-facing directory.
2. **No Sitemap Indexing**: The route is excluded from `sitemap.xml`.
3. **No Search Engine Indexing**: The route component must render `<meta name="robots" content="noindex, nofollow" />` (if React Helmet is added, otherwise rely on Firebase headers).
4. **No Public CTA**: Marketing copy must not invite users to "view the NVIDIA review".

## Source Deck Protection
The original NVIDIA source deck (`ISDI_SCINGULAR_NVIDIA_v3.html`) is absolutely forbidden from being served, imported, or pushed to remote repositories. The `/nvidia-review` route is an abstracted React reconstruction, NOT a wrapper around the source file.
