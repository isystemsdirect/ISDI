# OVERSCITE Deployment Doctrine Lock
**CB_ID:** L-UDCB-S__20260504-000000Z__SCING__OVERSCITE-GOOGLE-CLOUD-ACCESS-LOCK-001
**Status:** LOCKED

OVERSCITE access is canonically routed through Firebase Hosting and Google Cloud Run. Vercel is explicitly excluded from the current hosting or access dependency for OVERSCITE.

## Locked Access Model

### 1. Public ISDI Website
- **Host:** Firebase Hosting
- **Purpose:** Public company website, NVIDIA readiness, SCINGULAR / OVERSCITE public positioning.

### 2. OVERSCITE Preview
- **Primary Host:** Firebase Hosting
- **Escalation Host:** Cloud Run (when SSR, API runtime, or heavier app behavior is required).
- **Data Mode:** Demo-safe (no live operational data unless explicitly approved).

### 3. Full OVERSCITE
- **Host:** Google Cloud Run
- **Backend Infrastructure:**
  - Firebase Auth
  - Firestore
  - Cloud Functions
  - Google Cloud services as required

### 4. Domain Strategy
- **Root Domain:** `isystemsdirect.com`
- **Routing Position:** Domain points exclusively to Google Cloud / Firebase deployment infrastructure.

## Canonical Guardrails
- **No Vercel Dependency:** Do not depend on Vercel for OVERSCITE access unless explicitly authorized by the Director.
- **Role Separation:** Keep ISDI public website and OVERSCITE operational app separated by deployment role.
- **Server Runtime Rules:** Full OVERSCITE belongs on Cloud Run when server runtime is required.
- **Backend Alignment:** Firebase remains the aligned backend lane for auth, Firestore, functions, and hosting.
- **Strict Compliance:** No unsupported public claims, live customer data exposure, or unmanaged preview access.

---
*Any future change to OVERSCITE access or hosting must return a supersession, revision, or execution packet confirming the new access path, affected domains, hosting services, backend changes, security posture, and rollback path.*
