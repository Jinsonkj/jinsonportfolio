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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reveal Intersection Observer
    const revealElements = document.querySelectorAll('.reveal, .reveal-right, .reveal-left');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));

    // Cleanup
    return () => {
      revealElements.forEach(el => revealOnScroll.unobserve(el));
    };
  }, [loading]); // Re-run when loading finishes so elements are in DOM

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
