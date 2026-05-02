import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  const [loading, setLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    // Check for 404
    const path = window.location.pathname;
    const isRoot = path === '/' || path === '/jinsonportfolio/' || path.endsWith('index.html');
    if (!isRoot) {
      setIsNotFound(true);
      setLoading(false);
    }
  }, [loading]);

  if (isNotFound) {
    return <NotFound />;
  }

  return (
    <>
      <LoadingScreen loading={loading} setLoading={setLoading} />
      
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
      
      {/* Scroll to Top */}
      <a href="#hero" id="scroll-top" className="scroll-top hidden" aria-label="Scroll to top" onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}>
          <i className="fa-solid fa-arrow-up"></i>
      </a>
    </>
  );
}

export default App;
