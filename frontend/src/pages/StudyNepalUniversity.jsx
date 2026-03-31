import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/StudyNepal.css';
import { getStudyNepalUniversityById } from '../data/studyNepalData';

const StudyNepalUniversity = () => {
  const { universityId } = useParams();
  const uni = getStudyNepalUniversityById(universityId);

  if (!uni) {
    return (
      <div className="study-container">
        <header className="study-hero">
          <div className="container">
            <span className="hero-badge">Study Nepal</span>
            <h1>
              University <span className="text-gradient">Not Found</span>
            </h1>
            <p>Please go back and select another university.</p>
          </div>
        </header>
        <main className="container">
          <Link to="/study-nepal" className="explore-link">
            ← Back to Study Nepal
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="study-container">
      <header className="study-hero">
        <div className="container">
          <span className="hero-badge">{uni.type}</span>
          <h1>
            {uni.name.split('(')[0].trim()} <span className="text-gradient">{uni.name.match(/\(.*\)/)?.[0] || ''}</span>
          </h1>
          <p>{uni.summary}</p>
        </div>
      </header>

      <main className="container">
        <Link to="/study-nepal" className="explore-link">
          ← Back to Study Nepal
        </Link>

        <section className="bento-section">
          <div className="bento-header">
            <h2>Quick info (Nepali applicants)</h2>
            <p>Useful notes for Nepali students applying from inside Nepal.</p>
          </div>

          <div className="bento-grid" style={{ gridTemplateColumns: '1fr', gap: '16px' }}>
            <div className="bento-card large">
              <div className="card-content">
                <div className="bento-info">
                  <div className="bento-title-row">
                    <h3>Programs / faculties</h3>
                  </div>
                  <p>{uni.faculties}</p>
                  <div className="explore-link" style={{ marginTop: '10px' }}>
                    Location: {uni.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="bento-card large">
              <div className="card-content">
                <div className="bento-info">
                  <div className="bento-title-row">
                    <h3>Admission overview</h3>
                  </div>
                  <ul className="req-list">
                    {uni.admission.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bento-card large">
              <div className="card-content">
                <div className="bento-info">
                  <div className="bento-title-row">
                    <h3>Common documents (Nepali students)</h3>
                  </div>
                  <ul className="req-list">
                    {uni.documents.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bento-card large">
              <div className="card-content">
                <div className="bento-info">
                  <div className="bento-title-row">
                    <h3>Official links</h3>
                  </div>

                  <ul className="uni-list">
                    <li className="uni-item">
                      <a className="uni-link" href={uni.url} target="_blank" rel="noreferrer">
                        {uni.name} website <span className="uni-ext">↗</span>
                      </a>
                    </li>
                    {uni.entrancePortals.map((p) => (
                      <li key={p.url} className="uni-item">
                        <a className="uni-link" href={p.url} target="_blank" rel="noreferrer">
                          {p.name} <span className="uni-ext">↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>

                  <p style={{ marginTop: '10px', color: 'var(--muted)' }}>
                    Tip: Always cross-check deadlines and notices on the official site/portal before you submit fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudyNepalUniversity;

