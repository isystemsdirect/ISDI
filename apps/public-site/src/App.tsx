import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScingOrb } from './components/ScingOrb';
import { ScingGuidePanel } from './components/ScingGuidePanel';
import { MotionPreferenceGuard, BaneContextGate } from '@isdi/ug-uix';

// Pages
import { Home }            from './pages/Home';
import { About }           from './pages/About';
import { Scingular }       from './pages/Scingular';
import { Overscite }       from './pages/Overscite';
import { PreviewRequest }  from './pages/PreviewRequest';
import { Contact }         from './pages/Contact';
import { Faq }             from './pages/Faq';
import { Privacy }         from './pages/legal/Privacy';
import { Terms }           from './pages/legal/Terms';
import { Accessibility }   from './pages/legal/Accessibility';
import { Disclaimers }     from './pages/legal/Disclaimers';
import { NvidiaReviewExperience } from './pages/nvidia/NvidiaReviewExperience';

/**
 * Automatically redirects review.isystemsdirect.com root to the hidden review surface.
 */
function ReviewSubdomainRedirect() {
  if (
    typeof window !== 'undefined' &&
    window.location.hostname === 'review.isystemsdirect.com' &&
    window.location.pathname === '/'
  ) {
    window.location.replace('/nvidia-review');
  }
  return null;
}

function App() {
  const [guideActive, setGuideActive] = useState(false);

  return (
    <MotionPreferenceGuard>
      <BaneContextGate>
        <div className="app">
          <ReviewSubdomainRedirect />
          <Header onOpenGuide={() => setGuideActive(true)} />

          <main>
            <Routes>
              <Route path="/"                    element={<Home onOpenGuide={() => setGuideActive(true)} />} />
              <Route path="/about"               element={<About />} />
              <Route path="/scingular"           element={<Scingular />} />
              <Route path="/overscite"           element={<Overscite />} />
              <Route path="/preview-request"     element={<PreviewRequest />} />
              <Route path="/contact"             element={<Contact />} />
              <Route path="/faq"                 element={<Faq />} />
              <Route path="/legal/privacy"       element={<Privacy />} />
              <Route path="/legal/terms"         element={<Terms />} />
              <Route path="/legal/accessibility" element={<Accessibility />} />
              <Route path="/legal/disclaimers"   element={<Disclaimers />} />
              {/* Redirect legacy /preview hash to OVERSCITE Preview */}
              <Route path="/preview"             element={<PreviewRedirect />} />
              
              {/* Hidden Review Route */}
              <Route path="/nvidia-review"       element={<NvidiaReviewExperience />} />
            </Routes>
          </main>

          <Footer />

          {/* Scing Site Guide Interface */}
          <ScingOrb onClick={() => setGuideActive(!guideActive)} />
          <ScingGuidePanel active={guideActive} onClose={() => setGuideActive(false)} />
        </div>
      </BaneContextGate>
    </MotionPreferenceGuard>
  );
}

/** Immediately redirects browser to the OVERSCITE Preview environment. */
function PreviewRedirect() {
  if (typeof window !== 'undefined') {
    window.location.href = 'https://isdi-overscite.web.app';
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column', gap: '1rem' }}>
      <p style={{ color: 'var(--color-text-muted)' }}>Redirecting to OVERSCITE Preview…</p>
    </div>
  );
}

export default App;
