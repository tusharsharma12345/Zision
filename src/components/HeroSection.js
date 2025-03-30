import React from 'react';
import heroBg from '../assets/images/hero-bg.jpg';

function HeroSection() {
  return (
    <section id="home" style={styles.hero}>
      <div className="container" style={styles.heroContent}>
        <h1 style={styles.heroTitle}>
          Welcome to Zision IT Consulting and Services
        </h1>
        <p style={styles.heroSubtitle}>
          Your trusted partner in affordable web and mobile app development!
        </p>
        <a href="#services" className="btn" style={styles.heroBtn}>
          Explore Our Services
        </a>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    background: `linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)), url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '100px 0',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '42px',
    marginBottom: '20px',
    fontWeight: '700',
    color: 'white',
  },
  heroSubtitle: {
    fontSize: '20px',
    marginBottom: '30px',
    fontWeight: '300',
    lineHeight: '1.6',
  },
  heroBtn: {
    fontSize: '18px',
    padding: '14px 28px',
  }
};

export default HeroSection;