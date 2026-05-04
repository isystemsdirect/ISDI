# ISDI / SCINGULAR Public Repository

This repository contains the public-facing ISDI/SCINGULAR website and the OVERSCITE Preview demo application.

## Governance & Architecture
- **No live operational data:** The OVERSCITE Preview app strictly uses mock demo data.
- **ScingOS Bridge:** The `packages/scing-bridge` provides type-safe contracts to ScingOS concepts without incorporating live intelligence stack execution.
- **Public Claims:** Follow `docs/governance/PUBLIC_CLAIMS_GUARDRAILS.md` for all external communication.

## Apps
- `apps/public-site`: The main company website.
- `apps/overscite-preview`: A demo-safe public preview of OVERSCITE capabilities.

## Packages
- `packages/brand`: Shared branding assets and components.
- `packages/demo-data`: Mock data for the OVERSCITE Preview.
- `packages/scing-bridge`: Governed interface contracts with ScingOS.
- `packages/overscite-preview-kit`: Reusable demo UI components.
