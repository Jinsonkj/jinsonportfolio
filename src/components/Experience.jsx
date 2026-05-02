import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >Experience</motion.h2>
                <div className="timeline">
                    {[
                        {
                            date: "Feb 2025 – Present",
                            title: "IT Analyst",
                            company: "TCS (Kochi)",
                            details: [
                                "Spearheading the UI development of large-scale web applications using Angular.",
                                "Integrating complex RESTful APIs ensuring efficient data fetching and state management.",
                                "Writing scalable, reusable components enhancing overall clean code practices.",
                                "Collaborating with cross-functional teams to deliver a user-friendly, responsive interface."
                            ]
                        },
                        {
                            date: "Sep 2023 – Dec 2024",
                            title: "Senior Software Engineer",
                            company: "Muthoottu Infotech Pvt. Ltd. (MMSoftTech)",
                            details: [
                                "Developed and maintained interactive user interfaces for various applications.",
                                "Led frontend architecture improvements for scalable project structures.",
                                "Mentored junior developers and enforced best practices in code quality."
                            ]
                        },
                        {
                            date: "Dec 2019 – Sep 2023",
                            title: "Frontend Developer",
                            company: "Advanced Millennium Technologies Pvt. Ltd.",
                            details: [
                                "Built and optimized responsive front-end web applications.",
                                "Collaborated with design teams to fulfill UI/UX requirements.",
                                "Wrote clean javascript code, enhancing application performance."
                            ]
                        },
                        {
                            date: "Dec 2018 – May 2019",
                            title: "User Interface Engineer",
                            company: "Uvionics Tech Pte Ltd",
                            details: [
                                "Developed intuitive user interfaces focusing on seamless interactions.",
                                "Streamlined frontend views in collaboration with the engineering team."
                            ]
                        }
                    ].map((exp, index) => (
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
                                <span className="timeline-date">{exp.date}</span>
                                <h3>{exp.title}</h3>
                                <h4 className="company">{exp.company}</h4>
                                <ul className="timeline-details">
                                    {exp.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
