/**
 * SCING VOICE DATA
 * Defines the governed narration strings for the Scing Intelligence Guide.
 * Strictly adheres to ScingIntelligence doctrine.
 */

export interface NarrationStep {
  text: string;
  duration?: number; // ms to show before auto-advancing
}

export type NarrationContext = 'home' | 'nvidia' | 'architecture' | 'overscite' | 'about' | 'previewRequest' | 'contact' | 'faq';

export const SCING_VOICE_CATALOG: Record<NarrationContext, NarrationStep[]> = {
  home: [
    { text: "Welcome. I am Scing, your Intelligence Guide for the ISDI platform environment.", duration: 6000 },
    { text: "This site serves as a public interface for SCINGULAR™—a governed operating architecture for field-grade AI.", duration: 7000 },
    { text: "My role is to orient you through our infrastructure benefits and professional intelligence layers.", duration: 6000 },
    { text: "Site-bound intelligence is active. All guidance is bounded by BANE governance protocols.", duration: 7000 }
  ],
  nvidia: [
    { text: "Initiating Strategic Review sequence for SCINGULAR × NVIDIA compute alignment.", duration: 6000 },
    { text: "We are evaluating how accelerated compute offloading enhances real-time inference at the edge.", duration: 7000 },
    { text: "This alignment focuses on multimodal capture and governed decision-support for high-stakes environments.", duration: 8000 },
    { text: "Note that this review is exploratory. All mechanics remain bounded by BANE governance protocols.", duration: 7000 }
  ],
  architecture: [
    { text: "Accessing architectural overview. SCINGULAR is built on the BFI Trinity: Core, Field, and Workflow.", duration: 7000 },
    { text: "The system is 'Fail-Closed' by design, ensuring no intelligence act occurs without BANE verification.", duration: 7000 },
    { text: "We prioritize traceability and human-in-the-loop authority at every intelligence boundary.", duration: 6000 },
    { text: "BFI execution is active but restricted to public-safe disclosure on this surface.", duration: 7000 }
  ],
  overscite: [
    { text: "OVERSCITE™ is the governed operational-control surface.", duration: 6000 },
    { text: "BANE preserves authorized boundaries across all interactions.", duration: 6000 },
    { text: "Scing guides exploration without replacing accountable human authority.", duration: 7000 },
    { text: "BFI execution remains bounded and non-exposed on this public surface.", duration: 7000 }
  ],
  about: [
    { text: "Reviewing ISDI organizational posture and governance principles.", duration: 6000 },
    { text: "Our mission is to establish human-authority-first architecture for critical infrastructure.", duration: 7000 },
    { text: "Governance transparency is mandatory. All system acts are auditable.", duration: 6000 }
  ],
  previewRequest: [
    { text: "Initiating access request protocol for the OVERSCITE Preview environment.", duration: 6000 },
    { text: "This environment is isolated and does not contain live customer or field records.", duration: 7000 }
  ],
  contact: [
    { text: "Routing inquiry context for partnership or deployment consultation.", duration: 6000 },
    { text: "ISDI engages with enterprise, municipal, and infrastructure partners globally.", duration: 7000 },
    { text: "All partnership inquiries are processed under BANE-governed audit trails.", duration: 6000 }
  ],
  faq: [
    { text: "Accessing the public knowledge base for SCINGULAR and OVERSCITE.", duration: 6000 },
    { text: "All responses align with our strict governance and operational doctrine.", duration: 7000 }
  ]
};
