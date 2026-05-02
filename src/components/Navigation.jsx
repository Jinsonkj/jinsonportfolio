import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
    const [theme, setTheme] = useState('dark');
    const [menuActive, setMenuActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        // Initialize Theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }

        // Scroll listener for Navbar and Active Links
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Active link highlighting
            const sections = document.querySelectorAll('.section, .hero');
            let scrollPos = window.scrollY + 150;

            sections.forEach(sec => {
                if (scrollPos >= sec.offsetTop && scrollPos < (sec.offsetTop + sec.offsetHeight)) {
                    setActiveSection(sec.getAttribute('id'));
                }
            });

            // Scroll Top Button
            const scrollTopBtn = document.getElementById('scroll-top');
            if (scrollTopBtn) {
                if (window.scrollY > 500) {
                    scrollTopBtn.classList.remove('hidden');
                } else {
                    scrollTopBtn.classList.add('hidden');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <motion.nav 
            id="navbar" 
            className={`glass-nav ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="nav-container">
                <a href="#hero" className="logo" onClick={closeMenu}><span>J</span>inson.</a>
                
                <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
                    <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMenu}>About</a></li>
                    <li><a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={closeMenu}>Skills</a></li>
                    <li><a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={closeMenu}>Experience</a></li>
                    <li><a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`} onClick={closeMenu}>Education</a></li>
                    <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</a></li>
                </ul>
                
                <div className="nav-actions">
                    <button id="theme-toggle" aria-label="Toggle dark/light theme" onClick={toggleTheme}>
                        {theme === 'light' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
                    </button>
                    <a href="/Jinson_Resume.pdf" className="btn btn-outline" download="Jinson_Resume.pdf">
                        <i className="fa-solid fa-download"></i> Resume
                    </a>
                    <button className="mobile-menu-btn" aria-label="Open menu" onClick={toggleMenu}>
                        {menuActive ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navigation;
