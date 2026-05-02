import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="section bg-alt">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >Education & Certifications</motion.h2>
                <div className="timeline">
                    {[
                        {
                            title: "Master's in Computer Applications (MCA)",
                            company: "Nirmala College, Muvattupuzha",
                            desc: "Focus on software development, algorithms, and application design."
                        },
                        {
                            title: "Bachelor of Computer Applications (BCA)",
                            company: "MG University Kerala",
                            desc: "Core focus on programming, software engineering, and system fundamentals."
                        },
                        {
                            date: "Dec 2018",
                            title: "Digital Marketing Certification",
                            company: "Google"
                        }
                    ].map((edu, index) => (
                        <motion.div 
                            className="timeline-item" 
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                {edu.date && <span className="timeline-date">{edu.date}</span>}
                                <h3>{edu.title}</h3>
                                <h4 className="company">{edu.company}</h4>
                                {edu.desc && <p>{edu.desc}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
