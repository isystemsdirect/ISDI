# SCINGULAR Governance: Source Deck Artifact Policy

## 1. Objective
To maintain the absolute privacy and non-exposure of proprietary review materials, source decks, and strategic disclosure artifacts within the ISDI ecosystem.

## 2. Policy Mandates

### 2.1 Permanent Isolation
Proprietary source artifacts (specifically the NVIDIA Source Deck and similar materials) are classified as **OVERSCITE PRIVATE**. They must reside in the `archive/proprietary/` root directory. This directory is strictly decoupled from all application deployment paths.

### 2.2 Zero-Exposure Principle
- No web application in the SCINGULAR ecosystem may import, serve, link, or reference any proprietary source artifact by file path.
- "Review" experiences must use distilled, public-safe intelligence buffers. Any data extracted from a source deck must be re-authored as non-proprietary exploratory content.

### 2.3 Non-Mutation of Source
Source decks are **Witness-Grade** artifacts. They represent a point-in-time state of strategic disclosure. They may be archived but must never be modified once moved to the proprietary archival zone.

### 2.4 BANE Enforcement
Any attempt to access proprietary archival paths via browser-side URL discovery or console manipulation must be intercepted by the BANE Context Gate with a "BANE MAXIMUM" security response.

## 3. Deployment Guardrails
The `archive/` directory must be explicitly excluded from all `firebase.json` headers and deployment bundles to prevent accidental exposure on public subdomains.

## 4. Compliance Status
- **ISDI NVIDIA Source Deck v3**: LOCKED / ARCHIVED (PP9).
- **Adoption Status**: MANDATORY across all ecosystem repositories.
