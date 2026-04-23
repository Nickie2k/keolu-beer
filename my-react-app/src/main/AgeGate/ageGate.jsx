import React, { useState } from 'react';
import './ageGate.css';

function AgeGate({ onVerified }) {
  const [leaving, setLeaving] = useState(false);

  function handleNo() {
    setLeaving(true);
    setTimeout(() => {
      window.location.href = 'https://www.google.com';
    }, 550);
  }

  return (
    <div className={`age-gate-overlay${leaving ? ' age-gate-leaving' : ''}`}>
      <div className="age-gate-card">
        <p className="age-gate-logo">Keolu Beer</p>
        <h1 className="age-gate-heading">Are You of Legal Drinking Age?</h1>
        <p className="age-gate-body">
          You must be <strong>21 years or older</strong> to enter this site.
          Please drink responsibly.
        </p>
        <p className="age-gate-question">Are you 21 or older?</p>
        <div className="age-gate-actions">
          <button className="age-gate-btn age-gate-btn--yes" onClick={onVerified}>
            Yes, I'm 21+
          </button>
          <button className="age-gate-btn age-gate-btn--no" onClick={handleNo}>
            No
          </button>
        </div>
        <p className="age-gate-disclaimer">
          By entering you accept our terms &amp; conditions.
        </p>
      </div>
    </div>
  );
}

export default AgeGate;
