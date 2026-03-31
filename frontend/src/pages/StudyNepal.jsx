import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StudyNepal.css'; // Ensure the capital 'S' matches your file name
import { entrancePortals, studyNepalUniversities } from '../data/studyNepalData';

function StudyNepal() {
  return (
    <div className="study-container">
      {/* Hero Section matching Career Roadmap Header */}
      <header className="study-hero">
        <div className="container">
          <span className="hero-badge">Academic Excellence</span>
          <h1>Navigate Your <span className="text-gradient">Education</span></h1>
          <p>The definitive guide to Nepal's top universities and entrance systems.</p>
        </div>
      </header>

      <main className="container">
        {/* Universities - Bento Grid Layout */}
        <section className="bento-section">
          <div className="bento-header">
            <h2>Top Universities</h2>
            <p>Official sites + Nepal-focused admissions notes for Nepali students.</p>
          </div>
          
          <div className="bento-grid">
            {studyNepalUniversities.map((u) => (
              <Link
                key={u.id}
                to={`/study-nepal/${u.id}`}
                className={`bento-card ${u.featured ? 'large' : 'small'}`}
                aria-label={`Open details for ${u.name}`}
              >
                <div className="card-content">
                  <span className="bento-icon">{u.icon}</span>
                  <div className="bento-info">
                    <div className="bento-title-row">
                      <h3>{u.name}</h3>
                    </div>
                    <span className="mini-badge">{u.type}</span>
                    <p>{u.faculties}</p>
                  </div>
                  <div className="explore-link">View details →</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Entrance Exams Section */}
        <section className="exam-section">
          <div className="bento-header">
            <h2>Entrance Portals</h2>
          </div>
          <div className="exam-flex">
            {entrancePortals.map((e) => (
              <a key={e.id} href={e.url} className="exam-card" target="_blank" rel="noreferrer">
                <div className="exam-inner">
                  <span className="exam-icon">{e.icon}</span>
                  <div>
                    <h4>{e.name}</h4>
                    <p>{e.desc}</p>
                    <span className="exam-status">📅 {e.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="premium-cta">
          <h2>Unsure of your direction?</h2>
          <p>Our career roadmaps help you choose the right faculty before you apply.</p>
          <Link to="/careers" className="cta-button">Explore Roadmaps →</Link>
        </div>
      </main>
    </div>
  );
}

export default StudyNepal;