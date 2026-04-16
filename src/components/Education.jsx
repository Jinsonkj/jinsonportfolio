import React from 'react';

const Education = () => {
    return (
        <section id="education" className="section bg-alt">
            <div className="container">
                <h2 className="section-title reveal">Education & Certifications</h2>
                <div className="timeline reveal">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>Master's in Computer Applications (MCA)</h3>
                            <h4 className="company">Nirmala College, Muvattupuzha</h4>
                            <p>Focus on software development, algorithms, and application design.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>Bachelor of Computer Applications (BCA)</h3>
                            <h4 className="company">MG University Kerala</h4>
                            <p>Core focus on programming, software engineering, and system fundamentals.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-date">Dec 2018</span>
                            <h3>Digital Marketing Certification</h3>
                            <h4 className="company">Google</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
