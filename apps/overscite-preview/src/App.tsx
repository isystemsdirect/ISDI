import { MOCK_PROPERTY_DATA } from '@isdi/demo-data';
import { OVERSCITE_DEMO_DISCLAIMER } from '@isdi/scing-bridge';
import { DemoHeader } from '@isdi/overscite-preview-kit';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <DemoHeader title="OVERSCITE Preview" />
      <p><strong>Notice:</strong> {OVERSCITE_DEMO_DISCLAIMER}</p>
      <h2>Mock Data Loaded</h2>
      <pre>{JSON.stringify(MOCK_PROPERTY_DATA, null, 2)}</pre>
    </div>
  )
}

export default App
