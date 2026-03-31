import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/SkillDetail.css';

const API = 'http://localhost:5000/api';

function SkillDetail() {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${API}/skills/${id}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setSkill(data.data);
        else setError('Skill not found.');
      })
      .catch(() => setError('Could not connect to server. Please make sure the backend is running.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div className="skill-detail-container">
      <div className="container">
        <div className="loading-state">
          <div className="spinner"></div>
          <span>Loading skill details...</span>
        </div>
      </div>
    </div>
  );

  if (error || !skill) return (
    <div className="skill-detail-container">
      <div className="container">
        <div className="error-state">
          <p>⚠️ {error}</p>
          <Link to="/skills" className="back-link">← Back to Skills</Link>
        </div>
      </div>
    </div>
  );

  const levelColor = { 
    Beginner: 'badge-green', 
    Intermediate: 'badge-amber', 
    Advanced: 'badge-red' 
  }[skill.level] || 'badge-blue';

  return (
    <div className="skill-detail-container">
      <div className="container">
        <Link to="/skills" className="back-link">← Back to Skills</Link>
        
        <div className="skill-detail-layout">
          <div className="skill-detail-main">
            <div className="skill-header">
              <div className="skill-icon">🎯</div>
              <div className="skill-title-block">
                <div className="skill-badges">
                  <span className="badge badge-purple">{skill.category}</span>
                  <span className={`badge ${levelColor}`}>{skill.level}</span>
                </div>
                <h1>{skill.name}</h1>
                <p className="skill-description">{skill.description}</p>
              </div>
            </div>

            <div className="detail-section">
              <h2>🚀 What You Can Achieve</h2>
              <p className="section-intro">After completing this skill, you'll be able to:</p>
              <ul className="achievements-list">
                {skill.achievements?.map((achievement, i) => (
                  <li key={i} className="achievement-item">
                    <span className="check-icon">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h2>💡 Benefits of Learning This Skill</h2>
              <ul className="benefits-list">
                {skill.benefits?.map((benefit, i) => (
                  <li key={i} className="benefit-item">
                    <span className="star-icon">⭐</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h2>📋 Learning Path</h2>
              <ol className="roadmap-list">
                {skill.steps?.map((step, i) => (
                  <li key={i} className="roadmap-step">
                    <div className="step-indicator">
                      <div className="step-number">{i + 1}</div>
                      {i < skill.steps.length - 1 && <div className="step-line" />}
                    </div>
                    <div className="step-text">{step}</div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="detail-section">
              <h2>🏛️ Recommended Institutes</h2>
              <p className="section-intro">Learn from these trusted sources:</p>
              <div className="institutes-grid">
                {skill.institutes?.map((institute, i) => (
                  <a key={i} href={institute.url} target="_blank" rel="noreferrer" className="institute-card">
                    <span className="institute-icon">🏫</span>
                    <span className="institute-name">{institute.name}</span>
                    <span className="institute-link">Visit →</span>
                  </a>
                ))}
              </div>
            </div>

            {skill.resources?.length > 0 && (
              <div className="detail-section">
                <h2>📚 Free Resources</h2>
                <div className="resources-grid">
                  {skill.resources.map((r, i) => (
                    <a key={i} href={r.url} target="_blank" rel="noreferrer" className="resource-card">
                      <span className="resource-icon">📖</span>
                      <span className="resource-name">{r.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="skill-detail-sidebar">
            <div className="sidebar-card quick-facts">
              <h3>Quick Facts</h3>
              <div className="fact-row">
                <span className="fact-label">⏱ Duration</span>
                <span className="fact-value">{skill.duration}</span>
              </div>
              <div className="fact-row">
                <span className="fact-label">💰 Cost</span>
                <span className="fact-value">{skill.price}</span>
              </div>
              <div className="fact-row">
                <span className="fact-label">💵 Avg Salary</span>
                <span className="fact-value salary">{skill.averageSalary}</span>
              </div>
              <div className="fact-row">
                <span className="fact-label">📈 Prospects</span>
                <span className="fact-value prospect">{skill.jobProspects}</span>
              </div>
              <div className="fact-row">
                <span className="fact-label">📊 Level</span>
                <span className={`badge ${levelColor}`}>{skill.level}</span>
              </div>
            </div>

            <div className="sidebar-card cta-card">
              <h3>Ready to Start?</h3>
              <p>Choose a learning path that fits your schedule and budget.</p>
              <Link to="/careers" className="cta-button">Find Related Careers →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillDetail;