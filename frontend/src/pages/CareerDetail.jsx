import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/career-detail.css';

const API = import.meta.env.VITE_API_URL + '/api';

function CareerDetail() {
  const { id } = useParams();
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${API}/careers/${id}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setCareer(data.data);
        else setError('Career not found.');
      })
      .catch(() => setError('Could not connect to server. Please make sure the backend is running.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div className="career-detail-page">
      <div className="career-banner">
        <div className="container">
          <h1>Loading...</h1>
        </div>
      </div>
    </div>
  );

  if (error || !career) return (
    <div className="career-detail-page">
      <div className="career-banner">
        <div className="container">
          <Link to="/careers" className="back-link-white">← Back to Careers</Link>
          <h1>Career <span className="blue-text">Not Found</span></h1>
          <p>⚠️ {error || 'The career roadmap you\'re looking for doesn\'t exist.'}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="career-detail-page">
      <div className="career-banner">
        <div className="container">
          <Link to="/careers" className="back-link-white">← Back to Careers</Link>
          <h1>{career.icon} {career.title} <span className="blue-text">Roadmap</span></h1>
          <p>Your gateway to professional success and career opportunities in Nepal.</p>
        </div>
      </div>

      <div className="container">
        <div className="career-detail-layout">
          <div className="main-content">
            <div className="content-card">
              <h2>🎯 What You Can Achieve</h2>
              <ul className="achievements-list">
                {career.achievements?.map((achievement, i) => (
                  <li key={i} className="achievement-item">
                    <span className="check-icon">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="content-card">
              <h2>💡 Benefits of This Career</h2>
              <ul className="benefits-list">
                {career.benefits?.map((benefit, i) => (
                  <li key={i} className="benefit-item">
                    <span className="star-icon">⭐</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="content-card">
              <h2>🗺️ Step-by-Step Path</h2>
              <div className="roadmap-vertical">
                {career.roadmap?.map((step, i) => (
                  <div key={i} className="roadmap-item">
                    <div className="step-count">{i + 1}</div>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="content-card">
              <h2>🏛️ Recommended Institutes</h2>
              <p className="section-intro">Start your journey at these trusted institutions:</p>
              <div className="institutes-grid">
                {career.institutes?.map((institute, i) => (
                  <a key={i} href={institute.url} target="_blank" rel="noreferrer" className="institute-card">
                    <span className="institute-icon">🏫</span>
                    <span className="institute-name">{institute.name}</span>
                    <span className="institute-link">Visit →</span>
                  </a>
                ))}
              </div>
            </div>

            {career.resources?.length > 0 && (
              <div className="content-card">
                <h2>📚 Free Resources</h2>
                <div className="resources-grid">
                  {career.resources.map((r, i) => (
                    <a key={i} href={r.url} target="_blank" rel="noreferrer" className="resource-card">
                      <span className="resource-icon">📖</span>
                      <span className="resource-name">{r.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="sidebar">
            <div className="sidebar-card">
              <h3>Quick Facts</h3>
              <div className="fact-row">
                <span>⏱ Duration:</span>
                <strong>{career.duration}</strong>
              </div>
              <div className="fact-row">
                <span>💰 Est. Cost:</span>
                <strong>{career.cost}</strong>
              </div>
              <div className="fact-row">
                <span>📈 Prospects:</span>
                <span className="prospect-badge">{career.jobProspects}</span>
              </div>
              <div className="fact-row">
                <span>💵 Avg Salary:</span>
                <strong className="green-text">{career.averageSalary}</strong>
              </div>
              <div className="fact-row">
                <span>📂 Category:</span>
                <strong>{career.category}</strong>
              </div>
            </div>

            <div className="sidebar-card">
              <h3>Explore More</h3>
              <Link to="/skills" className="explore-more-link">🚀 View Related Skills</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerDetail;