import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="container footer-content">
                <div className="footer-logo"><span>J</span>inson.</div>
                <div className="social-links footer-socials">
                    <a href="https://www.linkedin.com/in/jinson-k-j-585851176/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
                </div>
                <p>&copy; <span>{year}</span> Jinson. All rights reserved.</p>
            </div>
        </motion.footer>
    );
};

export default Footer;
