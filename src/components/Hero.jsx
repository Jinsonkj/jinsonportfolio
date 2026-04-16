import React, { useState, useEffect } from 'react';

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
                <div className="hero-text reveal">
                    <h3 className="greeting">Hello, I'm</h3>
                    <h1 className="name">Jinson</h1>
                    <h2 className="title-container">
                        <span className="static-title">I am an </span>
                        <span className="dynamic-text">{typedText}</span><span className="cursor">|</span>
                    </h2>
                    <p className="hero-desc">
                        A passionate web developer focused on building scalable, performant web applications with clean code
                        and user-friendly UI.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    </div>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/jinson-k-j-585851176/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="hero-image reveal-right">
                    <div className="image-wrapper blur-bg">
                        <img src="https://ui-avatars.com/api/?name=J+inson&background=6366f1&color=fff&size=512&font-size=0.33"
                            alt="Jinson" className="avatar" />
                    </div>
                </div>
            </div>
            <a href="#about" className="scroll-down-indicator">
                <i className="fa-solid fa-chevron-down"></i>
            </a>
        </header>
    );
};

export default Hero;
