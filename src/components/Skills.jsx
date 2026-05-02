import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { icon: 'fa-angular', color: '#dd0031', title: 'Angular', desc: 'Component-driven architecture, Routing, state, and services.' },
        { icon: 'fa-js', color: '#3178c6', title: 'TypeScript', desc: 'Strong typing, interfaces, and advanced TS techniques.' },
        { icon: 'fa-js-square', color: '#f7df1e', title: 'JavaScript (ES6+)', desc: 'Async logic, DOM manipulation, APIs, modern syntax.' },
        { icon: 'fa-html5', color: '#e34f26', title: 'HTML5', desc: 'Semantic markup, accessibility, modern standards.' },
        { icon: 'fa-css3-alt', color: '#1572b6', title: 'CSS3 & SCSS', desc: 'Responsive design, Flexbox, Grid, keyframes.' },
        { icon: 'fa-gears', isSolid: true, color: '#6366f1', title: 'Tools & Ecosystem', desc: 'RxJS, Git, Agile Methodologies, REST API integrations.' },
        { icon: 'fa-pen-nib', isSolid: true, color: '#ff007f', title: 'UI / UX Design', desc: 'User-friendly interfaces, accessibility, wireframing.' },
        { icon: 'fa-robot', isSolid: true, color: '#10b981', title: 'AI-Assisted Coding', desc: 'Proficient in vibe coding with AI tools like Antigravity and Blackbox.' }
    ];

    return (
        <section id="skills" className="section bg-alt">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >Technical Skills</motion.h2>
                <motion.div 
                    className="skills-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                >
                    {skills.map((skill, index) => (
                        <motion.div 
                            className="skill-card" 
                            key={index}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9, y: 20 },
                                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                            }}
                        >
                            <i className={`${skill.isSolid ? 'fa-solid' : 'fa-brands'} ${skill.icon} tech-icon`} style={{ color: skill.color }}></i>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
