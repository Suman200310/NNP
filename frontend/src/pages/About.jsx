import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="container">
      <div className="about-container">

        <header className="about-header">
          <h1>Built for <span className="highlight">Nepali Students.</span></h1>
          <p>
            We understand the confusion Nepali students face — whether to pursue IOE, 
            go for a private university, or study abroad. That's why we created a single 
            platform with real roadmaps, updated salary data, and step-by-step guides 
            covering careers, skills, and international education. No fluff, just 
            actionable guidance tailored to Nepal's reality.
          </p>
        </header>

        <div className="mission-vision">
          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>
              To bridge the gap between education and employment for Nepali students by 
              providing free, practical roadmaps and resources that reflect real market 
              demands — from +2 to your first job or abroad opportunity.
            </p>
          </div>

          <div className="mission-card">
            <h3>Our Vision</h3>
            <p>
              To empower every ambitious Nepali student — whether in Kathmandu or rural 
              Nepal — with the clarity and confidence to make informed career decisions 
              and unlock their full potential.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;