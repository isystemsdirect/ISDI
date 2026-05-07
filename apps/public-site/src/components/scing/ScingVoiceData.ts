/**
 * SCING VOICE DATA
 * Defines the governed narration strings for the Scing Intelligence Guide.
 * Strictly adheres to ScingIntelligence doctrine.
 */

export interface NarrationStep {
  text: string;
  duration?: number; // ms to show before auto-advancing
}

export type NarrationContext = 'home' | 'nvidia' | 'architecture';

export const SCING_VOICE_CATALOG: Record<NarrationContext, NarrationStep[]> = {
  home: [
    { text: "Welcome. I am Scing, your Intelligence Guide for the ISDI platform environment.", duration: 6000 },
    { text: "This site serves as a public interface for SCINGULAR™—a governed operating architecture for field-grade AI.", duration: 7000 },
    { text: "My role is to orient you through our infrastructure benefits and professional intelligence layers.", duration: 6000 },
    { text: "Please explore the Overview or Architecture sections to understand our BFI Trinity foundation.", duration: 7000 }
  ],
  nvidia: [
    { text: "Initiating Strategic Review sequence for SCINGULAR × NVIDIA compute alignment.", duration: 6000 },
    { text: "We are evaluating how accelerated compute offloading enhances real-time inference at the edge.", duration: 7000 },
    { text: "This alignment focuses on multimodal capture and governed decision-support for high-stakes environments.", duration: 8000 },
    { text: "Note that this review is exploratory. All mechanics remain bounded by BANE governance protocols.", duration: 7000 },
    { text: "You may observe simulated metrics below representing theoretical edge-to-cloud routing efficiency.", duration: 6000 }
  ],
  architecture: [
    { text: "Accessing architectural overview. SCINGULAR is built on the BFI Trinity: Core, Field, and Workflow.", duration: 7000 },
    { text: "The system is 'Fail-Closed' by design, ensuring no intelligence act occurs without BANE verification.", duration: 7000 },
    { text: "We prioritize traceability and human-in-the-loop authority at every intelligence boundary.", duration: 6000 }
  ]
};
