import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/careers.css';

const API = 'http://localhost:5000/api';

const Careers = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/careers`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setCareers(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = ["All", "Technology", "Design", "Engineering", "Business", "Healthcare", "Law", "Aviation", "Media", "Education", "Technical", "Hospitality", "Finance", "Agriculture", "Security", "Social"];

  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'salary-high', label: 'Highest Salary' },
    { value: 'salary-low', label: 'Lowest Salary' },
    { value: 'duration-short', label: 'Shortest Duration' },
    { value: 'duration-long', label: 'Longest Duration' },
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
    const training = durationStr.match(/Training:\s*(\d+)/i);
    
    if (training) return parseInt(training[1]);
    if (years && months) return parseInt(years[1]) * 12 + parseInt(months[1]);
    if (years) return parseInt(years[1]) * 12;
    if (months) return parseInt(months[1]);
    return 999;
  };

  const filteredAndSortedCareers = careers
    .filter(career => {
      const matchesSearch = career.title?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || career.category === category;
      return matchesSearch && matchesCategory;
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
          return (a.title || '').localeCompare(b.title || '');
        case 'z-a':
          return (b.title || '').localeCompare(a.title || '');
        default:
          return 0;
      }
    });

  if (loading) return (
    <div className="careers-page">
      <header className="career-banner">
        <div className="container">
          <h1>Career <span className="blue-text">Roadmaps</span></h1>
          <p>Loading...</p>
        </div>
      </header>
    </div>
  );

  return (
    <div className="careers-page">
      <header className="career-banner">
        <div className="container">
          <h1>Career <span className="blue-text">Roadmaps</span></h1>
          <p>Your gateway to global degrees and career opportunities in Nepal.</p>
        </div>
      </header>

      <section className="container">
        <div className="policy-alert-card">
          <div className="policy-text">
            <h3>Confused about the 2026 Policy Changes?</h3>
            <p>From international work caps to Australia's new financial requirements, we have the latest updates.</p>
          </div>
          <button className="expert-btn">Talk to an Expert →</button>
        </div>

        <div className="filter-section">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search for a career (e.g. Civil Engineer)..." 
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-row">
            <div className="category-chips">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`chip ${category === cat ? 'active' : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="sort-wrapper">
              <span className="sort-label">Sort by:</span>
              <select 
                className="sort-select"
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

        <div className="results-count">
          Showing {filteredAndSortedCareers.length} career{filteredAndSortedCareers.length !== 1 ? 's' : ''}
        </div>

        <div className="careers-grid">
          {filteredAndSortedCareers.length > 0 ? (
            filteredAndSortedCareers.map(career => (
              <div key={career._id} className="career-card">
                <div className="card-top">
                  <span className="card-badge">{career.category}</span>
                  <span className="card-icon-main">{career.icon}</span>
                </div>
                <h3>{career.title}</h3>
                <p>{career.description}</p>
                <div className="card-meta">
                  <span className="meta-salary">💰 {career.averageSalary}</span>
                  <span className="meta-duration">⏱️ {career.duration}</span>
                </div>
                <Link to={`/careers/${career._id}`} className="card-link">
                  Explore Path <span>→</span>
                </Link>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h2>No roadmaps found for "{search}"</h2>
              <p>Try searching for a broader term or check your category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Careers;