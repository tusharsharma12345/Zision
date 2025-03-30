import React from 'react';
import webIcon from '../assets/images/web-icon.jpg';
import mobileIcon from '../assets/images/mobile-icon.png';

function ServicesSection() {
  return (
    <section id="services" style={styles.services}>
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        
        <div style={styles.servicesGrid}>
          <div style={styles.serviceCard}>
            <div style={styles.serviceIcon}>
              <img src={webIcon} alt="Web Development" style={styles.icon} />
            </div>
            <h3 style={styles.serviceTitle}>Web Development</h3>
            <p style={styles.serviceDesc}>
              Professional, modern websites tailored to your business needs.
            </p>
            <ul style={styles.serviceList}>
              <li>Responsive designs</li>
              <li>E-commerce solutions</li>
              <li>SEO-friendly development</li>
            </ul>
          </div>
          
          <div style={styles.serviceCard}>
            <div style={styles.serviceIcon}>
              <img src={mobileIcon} alt="Mobile App Development" style={styles.icon} />
            </div>
            <h3 style={styles.serviceTitle}>Mobile App Development</h3>
            <p style={styles.serviceDesc}>
              Robust, user-friendly mobile apps to scale your business.
            </p>
            <ul style={styles.serviceList}>
              <li>Cross-platform apps</li>
              <li>Intuitive UI/UX designs</li>
              <li>Performance optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  services: {
    backgroundColor: '#fff',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  serviceCard: {
    padding: '30px',
    borderRadius: '5px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    backgroundColor: '#fff',
    ':hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    }
  },
  serviceIcon: {
    marginBottom: '20px',
  },
  icon: {
    width: '60px',
    height: '60px',
  },
  serviceTitle: {
    fontSize: '24px',
    marginBottom: '15px',
    color: '#2c3e50',
  },
  serviceDesc: {
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  serviceList: {
    paddingLeft: '20px',
    marginBottom: '0',
  }
};

export default ServicesSection;