import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content container">
          <span className="badge">#1 Career Platform in Nepal</span>
          <h1>Don't Just Dream. <br /><span className="text-gradient">Plan Your Future.</span></h1>
          <p>Get step-by-step roadmaps, local salary insights, and study abroad guides tailored specifically for the Nepali student journey.</p>
          <div className="hero-btns">
            <Link to="/careers" className="btn-primary">Explore Careers</Link>
            <Link to="/skills" className="btn-secondary">View Skills</Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-bar">
        <div className="container stats-grid">
          <div className="stat-box">
            <span className="stat-icon">🎯</span>
            <span className="stat-number">30+</span>
            <span className="stat-label">Career Roadmaps</span>
          </div>
          <div className="stat-box">
            <span className="stat-icon">📚</span>
            <span className="stat-number">9+</span>
            <span className="stat-label">Skills to Learn</span>
          </div>
          <div className="stat-box">
            <span className="stat-icon">🌏</span>
            <span className="stat-number">7</span>
            <span className="stat-label">Study Abroad Countries</span>
          </div>
          <div className="stat-box">
            <span className="stat-icon">🏛️</span>
            <span className="stat-number">5</span>
            <span className="stat-label">Nepal Universities</span>
          </div>
        </div>
      </section>

      {/* Modern Features Grid */}
      <section className="features container">
        <div className="section-title">
          <h2>How we help you grow</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-box">🗺️</div>
            <h3>Career Roadmaps</h3>
            <p>From SEE/+2 to your first job. Detailed paths for Engineering, Medical, CA, and IT.</p>
            <Link to="/careers" className="card-link">Explore Path →</Link>
          </div>
          
          <div className="feature-card">
            <div className="icon-box">🚀</div>
            <h3>Skill Accelerator</h3>
            <p>Master the top skills in demand in Kathmandu's tech and corporate hubs.</p>
            <Link to="/skills" className="card-link">View Skills →</Link>
          </div>

          <div className="feature-card">
            <div className="icon-box">🌍</div>
            <h3>Study Abroad</h3>
            <p>No-nonsense guides on PTE/IELTS, visa costs, and PR pathways for 2026.</p>
            <Link to="/study-abroad" className="card-link">Check Countries →</Link>
          </div>
        </div>
      </section>

      {/* Study Options */}
      <section className="study-options container">
        <div className="section-title">
          <h2>Choose Your Path</h2>
        </div>
        <div className="options-grid">
          <div className="option-card nepal-card">
            <div className="option-icon">🇳🇵</div>
            <h3>Study in Nepal</h3>
            <p>Tu, Ku, PU - Get complete guides on Nepal's top universities, entrance exams, and programs.</p>
            <ul className="option-features">
              <li>IOE Pulchowk Entrance Guide</li>
              <li>MECEE-BL for Medical</li>
              <li>CMAT for Management</li>
            </ul>
            <Link to="/study-nepal" className="option-btn">Explore Nepal →</Link>
          </div>
          
          <div className="option-card abroad-card">
            <div className="option-icon">✈️</div>
            <h3>Study Abroad</h3>
            <p>Australia, Canada, UK, USA - Visa guides, costs, and university requirements.</p>
            <ul className="option-features">
              <li>PTE/IELTS Preparation Tips</li>
              <li>Scholarship Opportunities</li>
              <li>Post-Study Work Visas</li>
            </ul>
            <Link to="/study-abroad" className="option-btn">Explore Countries →</Link>
          </div>
        </div>
      </section>

      {/* Featured Careers */}
      <section className="featured-careers">
        <div className="container">
          <div className="section-title">
            <h2>Popular Career Paths</h2>
          </div>
          <div className="career-tags">
            <Link to="/careers/software-engineer" className="career-tag">💻 Software Engineer</Link>
            <Link to="/careers/data-scientist" className="career-tag">📊 Data Scientist</Link>
            <Link to="/careers/doctor" className="career-tag">⚕️ Doctor</Link>
            <Link to="/careers/cybersecurity" className="career-tag">🔒 Cybersecurity</Link>
            <Link to="/careers/ui-ux-designer" className="career-tag">🎨 UI/UX Designer</Link>
            <Link to="/careers/digital-marketer" className="career-tag">📱 Digital Marketer</Link>
            <Link to="/careers/chartered-accountant" className="career-tag">📑 Chartered Accountant</Link>
            <Link to="/careers/civil-engineer" className="career-tag">🏗️ Civil Engineer</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us container">
        <div className="section-title">
          <h2>Why NextStep Nepal?</h2>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <span className="why-icon">📍</span>
            <h4>Nepal-First Content</h4>
            <p>All guides, salaries, and requirements tailored for Nepali students and market realities.</p>
          </div>
          <div className="why-card">
            <span className="why-icon">🔄</span>
            <h4>Weekly Updates</h4>
            <p>Intake dates, salary trends, and policy changes updated regularly.</p>
          </div>
          <div className="why-card">
            <span className="why-icon">💯</span>
            <h4>100% Free</h4>
            <p>No hidden fees. All roadmaps, guides, and resources are completely free.</p>
          </div>
          <div className="why-card">
            <span className="why-icon">🤝</span>
            <h4>Expert Verified</h4>
            <p>Content reviewed by professionals working in Nepal's industries.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Explore career roadmaps, learn in-demand skills, and plan your study abroad adventure.</p>
          <div className="cta-buttons">
            <Link to="/careers" className="cta-primary">Browse Careers</Link>
            <Link to="/skills" className="cta-secondary">Explore Skills</Link>
          </div>
        </div>
      </section>

      {/* Local Context / Trust Section */}
      <section className="trust-section">
        <div className="container trust-flex">
          <div className="trust-text">
            <h2>Made for <span className="highlight-np">Nepal</span></h2>
            <p>We know the struggle of choosing between TU, KU, and going abroad. Our data is updated weekly to reflect the latest intake dates and market salaries.</p>
          </div>
          <div className="trust-stats">
            <div className="stat-item"><strong>30+</strong><p>Roadmaps</p></div>
            <div className="stat-item"><strong>10k+</strong><p>Monthly Users</p></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;