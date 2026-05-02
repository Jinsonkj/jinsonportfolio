import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const words = ["Angular Developer", "Frontend Engineer", "Problem Solver"];
    
    useEffect(() => {
        let isDeleting = false;
        let charIndex = 0;
        let wordIndex = 0;
        let timerId;

        const typeEffect = () => {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                setTypedText(currentWord.substring(0, charIndex - 1));
                charIndex--;
            } else {
                setTypedText(currentWord.substring(0, charIndex + 1));
                charIndex++;
            }

            let typingSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause at end of word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 500; // Pause before typing new word
            }

            timerId = setTimeout(typeEffect, typingSpeed);
        };

        // Start typing effect slightly after load
        timerId = setTimeout(typeEffect, 1500);

        return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <header id="hero" className="section hero">
            <div className="container hero-content">
                <motion.div 
                    className="hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }}
                >
                    <motion.h3 
                        className="greeting"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >Hello, I'm</motion.h3>
                    <motion.h1 
                        className="name"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >Jinson</motion.h1>
                    <motion.h2 
                        className="title-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="static-title">I am an </span>
                        <span className="dynamic-text">{typedText}</span><span className="cursor">|</span>
                    </motion.h2>
                    <motion.p 
                        className="hero-desc"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        A passionate web developer focused on building scalable, performant web applications with clean code
                        and user-friendly UI.
                    </motion.p>
                    <motion.div 
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    </motion.div>
                    <motion.div 
                        className="social-links"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <a href="https://www.linkedin.com/in/jinson-k-j-585851176/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="image-wrapper blur-bg">
                        <img src="https://ui-avatars.com/api/?name=J+inson&background=6366f1&color=fff&size=512&font-size=0.33"
                            alt="Jinson" className="avatar" />
                    </div>
                </motion.div>
            </div>
            <a href="#about" className="scroll-down-indicator">
                <i className="fa-solid fa-chevron-down"></i>
            </a>
        </header>
    );
};

export default Hero;
