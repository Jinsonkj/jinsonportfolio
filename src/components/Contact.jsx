import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.target;
        const data = new FormData(form);

        try {
            await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSf3udZSRWz9slCLdnhsd7gKTQJVFSnvlPp1XTsky3XcK71fFw/formResponse', {
                method: 'POST',
                mode: 'no-cors',
                body: data
            });
            setStatus('');
            setShowPopup(true);
            form.reset();
            setTimeout(() => setShowPopup(false), 5000);
        } catch (error) {
            console.error('Error submitting form', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <section id="contact" className="section bg-alt">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >Get In Touch</motion.h2>
                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h3>Let's build something amazing together.</h3>
                        <p>If you're looking for an Angular developer to join your team or have a project in mind, feel free to reach out.</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon-box"><i className="fa-solid fa-envelope"></i></div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:kutty2079@gmail.com" style={{ display: 'block', marginBottom: '0.2rem' }}>kutty2079@gmail.com</a>
                                    <a href="mailto:jinson47@yahoo.com" style={{ display: 'block' }}>jinson47@yahoo.in</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon-box"><i className="fa-solid fa-location-dot"></i></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Kochi, Kerala</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" id="name" name="entry.358739733" required placeholder="Your Name" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" name="entry.1119087509" required placeholder="Your Email" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-group">
                                <textarea id="message" name="entry.954233664" rows="5" required placeholder="Your Message"></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Sending...' : 'Send Message'} <i className="fa-solid fa-paper-plane"></i>
                            </button>
                            {status === 'error' && <div style={{ color: '#ef4444', marginTop: '1rem', textAlign: 'center', fontWeight: '500' }}>Something went wrong. Please try again.</div>}
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Success Popup */}
            {showPopup && (
                <div className="popup-overlay active" onClick={() => setShowPopup(false)}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <div className="popup-icon">
                            <i className="fa-regular fa-circle-check"></i>
                        </div>
                        <h3>Message Sent Successfully!</h3>
                        <p>Thank you for reaching out. I will get back to you soon.</p>
                        <button className="btn btn-primary" onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
