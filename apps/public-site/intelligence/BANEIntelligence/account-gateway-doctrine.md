# Account Gateway Doctrine (BANE)

## 1. Dual-Pathway Architecture
The SCINGULAR ecosystem enforces a clear distinction between public access and accountable identity.

### 1.1 ISDI Site Account
- **Purpose:** Public-tier access, community updates, generic demo downloads, and site preference management.
- **Authority Level:** Low / Access-only.
- **Identity:** Email-verified or Social-linked.

### 1.2 ARC Identity (Accountable Identity)
- **Purpose:** Accountable human identity within the SCINGULAR ecosystem. Required for governance-bearing actions, private OVERSCITE instance access, and SRT sensor orchestration.
- **Authority Level:** High / Verified.
- **Identity:** Licensed, certified, or organizational-verified human identity.

## 2. Onboarding Principles
- **No Co-mingling:** ARC identity must remain distinct from generic site accounts to prevent authority leakage.
- **Transparent Linking:** Users may link an ISDI Site Account to an ARC Identity for convenience, but the trust boundary remains at the ARC layer.
- **Explicit Gatekeeping:** Access to high-sensitivity surfaces (e.g., /nvidia-review or production OVERSCITE) must require explicit ARC verification.
