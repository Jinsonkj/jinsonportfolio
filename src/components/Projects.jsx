import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >Featured Projects</motion.h2>
                <motion.div 
                    className="projects-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {/* Project 1 */}
                    <motion.div 
                        className="project-card"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                    >
                        <div className="project-img placeholder">
                            <i className="fa-solid fa-laptop-code"></i>
                        </div>
                        <div className="project-info">
                            <h3>Enterprise Dashboard</h3>
                            <p>A comprehensive analytics dashboard built with Angular. Managed complex state with RxJS and visualized data.</p>
                            <div className="project-tags">
                                <span>Angular</span>
                                <span>TypeScript</span>
                                <span>RxJS</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="btn btn-sm btn-outline"><i className="fa-brands fa-github"></i> Source</a>
                                <a href="#" className="btn btn-sm btn-primary"><i className="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
                            </div>
                        </div>
                    </motion.div>
                    {/* Project 2 */}
                    <motion.div 
                        className="project-card"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                    >
                        <div className="project-img placeholder">
                            <i className="fa-solid fa-mobile-screen"></i>
                        </div>
                        <div className="project-info">
                            <h3>Task Master App</h3>
                            <p>A responsive task management application emphasizing intuitive UI and local storage integration.</p>
                            <div className="project-tags">
                                <span>JavaScript</span>
                                <span>CSS Grid</span>
                                <span>HTML5</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="btn btn-sm btn-outline"><i className="fa-brands fa-github"></i> Source</a>
                                <a href="#" className="btn btn-sm btn-primary"><i className="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
