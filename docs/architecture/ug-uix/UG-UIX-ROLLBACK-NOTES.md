# UG-UIX Rollback Notes

## Reverting the NVIDIA Proving Ground
If the UG-UIX integration into `/nvidia-review` needs to be reverted or if performance issues arise in production:
1. Replace `NvidiaReviewPlaceholder.tsx` contents with standard HTML/Tailwind markup.
2. Remove the `MotionPreferenceGuard`, `PresenceHalo`, and `AmbientMesh` wrappers.
3. Remove imports for `GlassPanel`, `SoftStateFrame`, `GovernedProgressMotion`, and `RevealSequence`.

## Reverting Global Styles
The UG-UIX CSS tokens in `src/styles/ug-uix/` are imported globally in `index.css`. If they interfere with other layouts, simply remove the `@import` statements in `src/index.css`. Because all UG-UIX effects are scoped to specific `.ug-uix-*` classes, removing the imports will safely strip the styles without breaking layout geometry (though graceful degradation to basic divs will occur).

## Deleting the UIX Layer
To completely strip the UIX layer from the repository:
- Delete `src/components/ug-uix/`
- Delete `src/styles/ug-uix/`
- Revert `src/pages/nvidia/NvidiaReviewPlaceholder.tsx`
- Revert `src/components/scing/ScingNarrationShell.tsx`
