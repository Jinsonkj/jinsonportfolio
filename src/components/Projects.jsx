import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title reveal">Featured Projects</h2>
                <div className="projects-grid">
                    {/* Project 1 */}
                    <div className="project-card reveal">
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
                    </div>
                    {/* Project 2 */}
                    <div className="project-card reveal" style={{ transitionDelay: '100ms' }}>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
