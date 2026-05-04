# ISDI Web Architecture

The ISDI Web repository is a monorepo containing:
1. The public ISDI/SCINGULAR website (`apps/public-site`).
2. The OVERSCITE Preview demo (`apps/overscite-preview`).

## Core Principles
- **Separation from Production:** This repository is entirely disconnected from live OVERSCITE Global operations, real customer data, and live ScingOS BANE/LARI execution.
- **Governed Bridges:** It uses `packages/scing-bridge` to consume type definitions and safe stubs representing ScingOS concepts for demonstration and documentation purposes.
