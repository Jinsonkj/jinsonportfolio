import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section bg-alt">
            <div className="container">
                <h2 className="section-title reveal">Get In Touch</h2>
                <div className="contact-wrapper reveal">
                    <div className="contact-info">
                        <h3>Let's build something amazing together.</h3>
                        <p>If you're looking for an Angular developer to join your team or have a project in mind, feel free to reach out.</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon-box"><i className="fa-solid fa-envelope"></i></div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:jinson@example.com">jinson@example.com</a>
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
                    </div>
                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <input type="text" id="name" required placeholder="Your Name" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" required placeholder="Your Email" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-group">
                                <textarea id="message" rows="5" required placeholder="Your Message"></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Send Message <i className="fa-solid fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
