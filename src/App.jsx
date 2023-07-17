import './App.css'
import { useState } from 'react';

import Navigation from "./components/Navigation"
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer"

function App() {
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
    <>
      <header>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>


      <main className="container">
        {renderPage()}
      </main>

      <footer>
        <Footer />
      </footer>


    </>
  )
}

export default App
