import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title reveal">Experience</h2>
                <div className="timeline reveal">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-date">Feb 2025 – Present</span>
                            <h3>IT Analyst</h3>
                            <h4 className="company">TCS (Kochi)</h4>
                            <ul className="timeline-details">
                                <li>Spearheading the UI development of large-scale web applications using Angular.</li>
                                <li>Integrating complex RESTful APIs ensuring efficient data fetching and state management.</li>
                                <li>Writing scalable, reusable components enhancing overall clean code practices.</li>
                                <li>Collaborating with cross-functional teams to deliver a user-friendly, responsive interface.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-date">Sep 2023 – Dec 2024</span>
                            <h3>Senior Software Engineer</h3>
                            <h4 className="company">Muthoottu Infotech Pvt. Ltd. (MMSoftTech)</h4>
                            <ul className="timeline-details">
                                <li>Developed and maintained interactive user interfaces for various applications.</li>
                                <li>Led frontend architecture improvements for scalable project structures.</li>
                                <li>Mentored junior developers and enforced best practices in code quality.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-date">Dec 2019 – Sep 2023</span>
                            <h3>Frontend Developer</h3>
                            <h4 className="company">Advanced Millennium Technologies Pvt. Ltd.</h4>
                            <ul className="timeline-details">
                                <li>Built and optimized responsive front-end web applications.</li>
                                <li>Collaborated with design teams to fulfill UI/UX requirements.</li>
                                <li>Wrote clean javascript code, enhancing application performance.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-date">Dec 2018 – May 2019</span>
                            <h3>User Interface Engineer</h3>
                            <h4 className="company">Uvionics Tech Pte Ltd</h4>
                            <ul className="timeline-details">
                                <li>Developed intuitive user interfaces focusing on seamless interactions.</li>
                                <li>Streamlined frontend views in collaboration with the engineering team.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
