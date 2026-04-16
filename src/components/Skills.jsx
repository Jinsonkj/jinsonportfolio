import React from 'react';

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
                <h2 className="section-title reveal">Technical Skills</h2>
                <div className="skills-grid reveal">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <i className={`${skill.isSolid ? 'fa-solid' : 'fa-brands'} ${skill.icon} tech-icon`} style={{ color: skill.color }}></i>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
