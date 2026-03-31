import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Style Imports
import './styles/global.css';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import Careers from './pages/Careers';
import CareerDetail from './pages/CareerDetail';
import Skills from './pages/Skills';
import SkillDetail from './pages/SkillDetail';
import StudyNepal from './pages/StudyNepal';
import StudyNepalUniversity from './pages/StudyNepalUniversity';
import StudyAbroad from './pages/StudyAbroad';
import StudyAbroadCountry from './pages/StudyAbroadCountry';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail'; // Renamed for consistency
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:id" element={<CareerDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/skills/:id" element={<SkillDetail />} />
            <Route path="/study-nepal" element={<StudyNepal />} />
            <Route path="/study-nepal/:universityId" element={<StudyNepalUniversity />} />
            <Route path="/study-abroad" element={<StudyAbroad />} />
            <Route path="/study-abroad/:countryId" element={<StudyAbroadCountry />} />
            <Route path="/blog" element={<Blog />} />
            {/* Updated to match the component name */}
            <Route path="/blog/:id" element={<ArticleDetail />} /> 
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;