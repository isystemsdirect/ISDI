# ScingOS UG-UIX File Map

> **P6 Status**: Finalized and Locked. Awaiting ScingOS repository access for transfer.

This map outlines where the Branch_Ready P5 components from ISDI should be placed once ScingOS is available.

## ISDI Source Path -> ScingOS Target Path

### Documentation
- `docs/uix/stems/*.md` -> `docs/architecture/ug-uix/stems/*.md`
- `docs/uix/UG-UIX-ELEMENT-REGISTRY.md` -> `docs/architecture/ug-uix/UG-UIX-ELEMENT-REGISTRY.md`

### Components
- `apps/public-site/src/components/ug-uix/*.tsx` -> `packages/ug-uix/src/components/*.tsx`
- `apps/public-site/src/components/ug-uix/index.ts` -> `packages/ug-uix/src/index.ts`

### Styles
- `apps/public-site/src/styles/ug-uix/*.css` -> `packages/ug-uix/src/styles/*.css`
