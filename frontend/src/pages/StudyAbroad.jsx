import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Study.css';
import { studyAbroadCountries } from '../data/studyAbroadCountries';

const StudyAbroad = () => {
  const countries = studyAbroadCountries;

  return (
    <div className="container" style={{ marginTop: '100px' }}>
      <header className="page-header text-center">
        <h1 className="main-title">International <span className="highlight">Education</span></h1>
        <p className="subtitle">Your gateway to global degrees and career opportunities.</p>
      </header>

      <div className="career-grid">
        {countries.map((c, i) => (
          <div key={i} className="career-card study-card">
            <div className="card-header">
              <h2>{c.name}</h2>
              <span className="visa-badge">{c.visa}</span>
            </div>
            
            <div className="card-body">
              <div className="info-row">
                <strong>📝 Language:</strong> <span>{c.test}</span>
              </div>
              <div className="info-row">
                <strong>📅 Intakes:</strong> <span>{c.intake}</span>
              </div>
              <div className="info-row">
                <strong>💰 Est. Cost:</strong> <span>{c.cost}</span>
              </div>
              <div className="info-row">
                <strong>💼 Work Rights:</strong> <span>{c.work}</span>
              </div>
              <div className="info-row">
                <strong>🚀 Pathway:</strong> <span>{c.pathway}</span>
              </div>
              <div className="popular-tags">
                {c.popular.split(', ').map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>

            <Link
              to={`/study-abroad/${c.id}`}
              className={`btn-country btn-country--${c.ctaVariant}`}
              aria-label={`Open details for ${c.name}`}
            >
              {c.ctaLabel} →
            </Link>
          </div>
        ))}
      </div>

      <section className="consultation-cta">
        <h3>Confused about the 2026 Policy Changes?</h3>
        <p>From Canada's new caps to Australia's increased financial requirements, we have the latest updates.</p>
        <button className="btn-highlight">Talk to an Expert</button>
      </section>
    </div>
  );
};

export default StudyAbroad;