# ScingOS Bridge Boundary

This boundary governs how the ISDI Web Repository interacts with ScingOS intelligence-stack concepts.

## Rules
1. **No Live Execution:** Do not import live LARI, BANE, or TEON execution modules.
2. **Type Contracts Only:** Import type definitions or interfaces that represent the structure of ScingOS responses.
3. **Demo Safes:** Use static descriptors or safe mocked interactions to represent Scing's intelligence in the OVERSCITE Preview.
4. **No Credentials:** Never include credentials for live ScingOS gateways or model backends in this repository.
