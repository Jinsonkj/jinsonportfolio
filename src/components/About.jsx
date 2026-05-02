import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >About Me</motion.h2>
                <div className="about-content">
                    <motion.div 
                        className="about-text"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p>I am a highly motivated <strong>Front-End Developer</strong> with <strong>over 6 years of
                                experience</strong>, currently working as an IT Analyst at <strong>TCS in Kochi</strong>. I
                            hold a Master's in Computer Applications (MCA) from Nirmala College and specialize in the
                            Angular framework natively designing and developing scalable, robust front-end architectures.
                        </p>
                        <p>My core focus lies in crafting beautifully modern web applications focused on performance and
                            seamless user experiences. With a strong proficiency in TypeScript, standard web technologies,
                            and UI/UX best practices, I write clean, maintainable code to solve complex problems.</p>
                        <div className="about-highlights">
                            <div className="highlight-item">
                                <i className="fa-solid fa-code"></i>
                                <span>Clean Code focused</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fa-solid fa-rocket"></i>
                                <span>Performance Optimized</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fa-solid fa-palette"></i>
                                <span>User-friendly UI</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
