# Public Site Mutation Gates
**Document Type:** Live-Mutation Authority Rules
**Authority:** Director Anderson / Scing
**Date:** 2026-05-07

## 1. Purpose
To define mutation classes and prevent accidental live mutations to the canon public site (`isystemsdirect.com`).

## 2. Mutation Classes & Approval Requirements
All public-site deployments are considered canon-live mutations. Approval requirements vary by class:

### Director-Authorized Only
The following high-risk mutations require explicit Director authorization prior to implementation or deployment:
- **Navigation:** Any change to global site routing or link structures.
- **Brand / Header & Footer Identity:** Alterations to logos, canonical brand names, or structural identity elements.
- **Color Scheme:** Adjustments to the site-wide palette.
- **Route Exposure:** Revealing hidden routes (e.g., `/nvidia-review`).
- **Source-Deck Handling:** Any modification to proprietary or witness-grade archive materials.
- **DNS / Deployment-Target Changes:** Altering domain routing, CNAMEs, A records, or Firebase bindings.
- **Deployment Control / Cache:** Changes to `firebase.json` cache-headers or deployment targets.

### Standard Change Control
- **Content:** Copy updates and typo fixes. *Even minor typo fixes require documented change notes because the public-site target is canon-live.*
- **Layout:** Non-structural visual adjustments that do not alter the Core Architecture or Navigation.
- **Asset:** Adding or replacing media assets that do not redefine Brand Identity.

## 3. Staging Lab Requirement
The alias domain `isdi-public.web.app` is **NOT** a safe independent lab. Before resuming speculative feature work, a true separate Firebase hosting target or preview channel must be established (e.g., `isdi-public-lab` or `public-site-preview`). Speculative work on the live `isdi-public` target is forbidden.
