import React from 'react';

function ContactSection() {
  return (
    <section id="contact" style={styles.contact}>
      <div className="container" style={styles.contactContainer}>
        <h2 className="section-title">Contact Us</h2>
        <p style={styles.contactText}>
          We'd love to hear from you! Click the button below to fill out our contact form.
        </p>
        <a 
          href="https://forms.gle/5ZR3ryazHQ8fTLn39" 
          className="btn" 
          style={styles.contactBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}

const styles = {
  contact: {
    backgroundColor: '#f5f7fa',
  },
  contactContainer: {
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto',
  },
  contactText: {
    marginBottom: '30px',
    fontSize: '18px',
  },
  contactBtn: {
    fontSize: '18px',
    padding: '14px 28px',
  }
};

export default ContactSection;