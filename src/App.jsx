import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation"
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <Navigation />

      <BrowserRouter>
        <Routes>
          <Route path="/Projects" element={<Projects />}/>
          <Route path="/" element={<About/>}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Resume" element={<Resume />}/>
        </Routes>
      </BrowserRouter>
      
      <Footer />

    </>
  )
}

export default App;
