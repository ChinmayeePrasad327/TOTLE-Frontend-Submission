import React, { useState, useEffect } from 'react'
import TopicSearch from './components/TopicSearch'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  // Effect to apply 'dark-mode' class to the body
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  const myName = " P.V.R.B.Chinmayee "; 

  return (
    <div className="app-container">
      <header className="app-header">
        
        {/* Dark Mode Toggle Button */}
        <button 
          onClick={toggleTheme} 
          className="theme-toggle-button"
          aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        <h1>TOTLE — Catalogue: Topic Browser</h1>
        <p className="subtitle">Search & filter topics (case-insensitive)</p>
      </header>

      <main className="main-content">
        <TopicSearch />
      </main>

      <footer className="footer">
        {/* Updated Footer with your name */}
        <small>Frontend Developer Intern — TOTLE (Round 1 demo) | Candidate: {myName}</small>
      </footer>
    </div>
  )
}