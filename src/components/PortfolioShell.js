import React, { useState } from 'react';

import Navigation from "./Navigation"
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function PortfolioShell() {
  // About Page selected  by default
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. 
  // Depending on the value of currentPage,
  // we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };


  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div>
      <header>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>


      <main className="container">
        {renderPage()}
      </main>


      <footer className="footer">
        <div className="content has-text-centered">
          <a href="https://github.com/victoriamcn" target="_blank" rel="noreferrer">
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
            <span className="social">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/victoria-mcnorrill/" target="_blank" rel="noreferrer">
            <span className="icon">
              <i className="fab fa-linkedin"></i>
            </span>
            <span className="social">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/victoriamcnorrill/" target="_blank" rel="noreferrer">
            <span className="icon">
              <i className="fab fa-instagram"></i>
            </span>
            <span className="social">Instagram</span>
          </a>
          <a href="https://open.spotify.com/user/torilizabeth95" target="_blank" rel="noreferrer">
            <span className="icon">
              <i className="fab fa-spotify"></i>
            </span>
            <span className="social">Spotify</span>
          </a>
        </div>
        <div className="content has-text-centered">
          <p className='byvictoria'>Created by Victoria</p>
          <p className='byvictoria is-small'>with React, JavaScript and Bulma CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default PortfolioShell