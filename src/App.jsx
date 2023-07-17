import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation"
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer"

function App() {

  function renderWithHeaderFooter(Component) {
    return (
      <>
        <Navigation />
        <Component />
        <Footer />
      </>
    )
  }


  return (
    <>
      

      <BrowserRouter>
        <Routes>
          <Route path="/Projects" element={renderWithHeaderFooter(Projects)}/>
          <Route path="/" element={renderWithHeaderFooter(About)}/>
          <Route path="/Contact" element={renderWithHeaderFooter(Contact)}/>
          <Route path="/Resume" element={renderWithHeaderFooter(Resume)}/>
        </Routes>
      </BrowserRouter>
      
      

    </>
  )
}

export default App;
