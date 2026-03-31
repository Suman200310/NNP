import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Skills.css';

const API = 'http://localhost:5000/api';

const Skills = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [level, setLevel] = useState('All');
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/skills`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setSkills(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = ["All", "Technology", "Programming", "Design", "Business", "Language", "Creative"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'salary-high', label: 'Highest Salary' },
    { value: 'salary-low', label: 'Lowest Salary' },
    { value: 'duration-short', label: 'Shortest Time' },
    { value: 'duration-long', label: 'Longest Time' },
    { value: 'a-z', label: 'A - Z' },
    { value: 'z-a', label: 'Z - A' },
  ];

  const getSalaryNumber = (salaryStr) => {
    if (!salaryStr) return 0;
    const match = salaryStr.match(/NPR\s*([\d,]+)/);
    if (match) {
      return parseInt(match[1].replace(/,/g, ''));
    }
    return 0;
  };

  const getDurationMonths = (durationStr) => {
    if (!durationStr) return 999;
    const years = durationStr.match(/(\d+)\s*year/i);
    const months = durationStr.match(/(\d+)\s*month/i);
    
    if (years && months) return parseInt(years[1]) * 12 + parseInt(months[1]);
    if (years) return parseInt(years[1]) * 12;
    if (months) return parseInt(months[1]);
    return 999;
  };

  const filteredAndSortedSkills = skills
    .filter(skill => {
      const matchesSearch = skill.name?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || skill.category === category;
      const matchesLevel = level === "All" || skill.level === level;
      return matchesSearch && matchesCategory && matchesLevel;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'salary-high':
          return getSalaryNumber(b.averageSalary) - getSalaryNumber(a.averageSalary);
        case 'salary-low':
          return getSalaryNumber(a.averageSalary) - getSalaryNumber(b.averageSalary);
        case 'duration-short':
          return getDurationMonths(a.duration) - getDurationMonths(b.duration);
        case 'duration-long':
          return getDurationMonths(b.duration) - getDurationMonths(a.duration);
        case 'a-z':
          return (a.name || '').localeCompare(b.name || '');
        case 'z-a':
          return (b.name || '').localeCompare(a.name || '');
        default:
          return 0;
      }
    });

  if (loading) return (
    <div className="skills-container">
      <div className="container">
        <header className="skills-banner">
          <h1>Master <span className="highlight">In-Demand Skills</span></h1>
          <p>Loading...</p>
        </header>
      </div>
    </div>
  );

  return (
    <div className="skills-container">
      <div className="container">
        <header className="skills-banner">
          <h1>Master <span className="highlight">In-Demand Skills</span></h1>
          <p>Stop jumping between tutorials. Pick a skill path, build real projects, and get job-ready.</p>
        </header>

        <div className="filter-section-skills">
          <div className="search-wrapper-skills">
            <span className="search-icon-skills">🔍</span>
            <input 
              type="text" 
              placeholder="Search for a skill (e.g. Python, Design)..." 
              className="search-input-skills"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-row-skills">
            <div className="filter-group">
              <span className="filter-label">Category:</span>
              <div className="category-chips-skills">
                {categories.map(cat => (
                  <button 
                    key={cat} 
                    className={`chip-skills ${category === cat ? 'active' : ''}`}
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <span className="filter-label">Level:</span>
              <div className="level-chips">
                {levels.map(lvl => (
                  <button 
                    key={lvl} 
                    className={`chip-skills level-chip ${level === lvl ? 'active' : ''}`}
                    onClick={() => setLevel(lvl)}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div className="sort-wrapper-skills">
              <span className="filter-label">Sort:</span>
              <select 
                className="sort-select-skills"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="results-count-skills">
          Showing {filteredAndSortedSkills.length} skill{filteredAndSortedSkills.length !== 1 ? 's' : ''}
        </div>

        <div className="skills-grid">
          {filteredAndSortedSkills.length > 0 ? (
            filteredAndSortedSkills.map((skill, index) => (
              <div key={skill._id || index} className="skill-card">
                <div className="skill-header-card">
                  <span className="skill-badge">{skill.level || 'Beginner'}</span>
                  <span className="skill-category-badge">{skill.category}</span>
                </div>
                <h2 className="skill-title">{skill.name}</h2>
                <p className="skill-desc">{skill.description}</p>
                
                <div className="skill-meta">
                  <span className="meta-item">💰 {skill.price || skill.averageSalary}</span>
                  <span className="meta-item">⏱️ {skill.duration}</span>
                </div>

                <Link to={`/skills/${skill._id}`} className="btn-main-skills">
                  View Full Roadmap →
                </Link>
              </div>
            ))
          ) : (
            <div className="no-results-skills">
              <h2>No skills found</h2>
              <p>Try adjusting your filters or search term.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
