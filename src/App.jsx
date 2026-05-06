import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import News from './News';
import Fixtures from './Fixtures';
import Contact from './Contact';
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <div className="app">
      
        <header>
          <h1>Premier Football Club</h1>
          <nav className={isMenuOpen ? 'nav-open' : ''}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/news" onClick={closeMenu}>News</Link>
            <Link to="/fixtures" onClick={closeMenu}>Fixtures</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </nav>
          <div className={`mobile-menu-toggle ${isMenuOpen ? 'mobile-menu-open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          <p>&copy; 2026 Premier Football Club. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App
