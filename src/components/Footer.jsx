import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
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
        </footer>
    );
};

export default Footer;
