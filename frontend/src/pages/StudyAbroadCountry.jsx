import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/Study.css';
import { getStudyAbroadCountryById } from '../data/studyAbroadCountries';

const StudyAbroadCountry = () => {
  const { countryId } = useParams();
  const country = getStudyAbroadCountryById(countryId);

  if (!country) {
    return (
      <div className="container" style={{ marginTop: '100px' }}>
        <header className="page-header text-center">
          <h1 className="main-title">Country not found</h1>
          <p className="subtitle">Please go back and select another country.</p>
        </header>
        <Link to="/study-abroad" className="back-link">
          ← Back to Study Abroad
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: '100px' }}>
      <header className="page-header text-center">
        <h1 className="main-title">
          Study in <span className="highlight">{country.name}</span>
        </h1>
        <p className="subtitle">{country.pathway}</p>
      </header>

      <Link to="/study-abroad" className="back-link">
        ← Back to Study Abroad
      </Link>

      <div className="career-grid" style={{ gridTemplateColumns: '1fr', marginTop: '18px' }}>
        <div className="career-card">
          <div className="card-header">
            <h2>{country.name}</h2>
            <span className="visa-badge">{country.visa}</span>
          </div>

          <div className="card-body">
            <div className="info-row">
              <strong>📝 Language:</strong> <span>{country.test}</span>
            </div>
            <div className="info-row">
              <strong>📅 Intakes:</strong> <span>{country.intake}</span>
            </div>
            <div className="info-row">
              <strong>💰 Est. Cost:</strong> <span>{country.cost}</span>
            </div>
            <div className="info-row">
              <strong>💼 Work Rights:</strong> <span>{country.work}</span>
            </div>
            <div className="info-row">
              <strong>🚀 Pathway:</strong> <span>{country.pathway}</span>
            </div>

            <div className="popular-tags">
              {country.popular.split(', ').map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="country-details" style={{ marginTop: '18px' }}>
              <div className="details-grid">
                <div className="details-panel">
                  <h4>Popular choices for Nepali students (official links)</h4>
                  <ul className="uni-list">
                    {country.universities.map((u) => (
                      <li key={u.url} className="uni-item">
                        <a href={u.url} target="_blank" rel="noreferrer" className="uni-link">
                          {u.name} <span className="uni-ext">↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="details-panel">
                  <h4>Requirements (for Nepali applicants)</h4>
                  <ul className="req-list">
                    {country.requirements.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {country.notes?.length ? (
                <div className="details-notes">
                  {country.notes.map((n) => (
                    <p key={n} className="note-line">
                      {n}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <section className="consultation-cta">
        <h3>Confused about the 2026 Policy Changes?</h3>
        <p>We keep your checklist updated based on the latest intake patterns and visa rules.</p>
        <button className="btn-highlight" type="button">
          Talk to an Expert
        </button>
      </section>
    </div>
  );
};

export default StudyAbroadCountry;

