import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={styles.header}>
      <div className="container" style={styles.headerContainer}>
        <div style={styles.logo}>
          <img src={logo} alt="Zision IT Logo" style={styles.logoImg} />
          <h1 style={styles.logoText}>Zision IT</h1>
        </div>
        
        <div style={styles.mobileMenuBtn} onClick={toggleMenu}>
          <span style={styles.menuIcon}></span>
        </div>
        
        <nav style={{
          ...styles.nav,
          ...(menuOpen ? styles.navActive : {})
        }}>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
            <li style={styles.navItem}><a href="#services" style={styles.navLink}>Services</a></li>
            <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    height: '40px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: '600',
    margin: 0,
    color: '#3498db',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      position: 'absolute',
      top: '70px',
      left: 0,
      width: '100%',
      backgroundColor: '#fff',
      padding: '20px',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
      transform: 'translateY(-100%)',
      transition: 'transform 0.3s ease-in-out',
      opacity: 0,
      visibility: 'hidden',
    }
  },
  navActive: {
    transform: 'translateY(0)',
    opacity: 1,
    visibility: 'visible',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    }
  },
  navItem: {
    margin: '0 15px',
    '@media (max-width: 768px)': {
      margin: '10px 0',
    }
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    transition: 'color 0.3s',
    ':hover': {
      color: '#3498db',
    }
  },
  mobileMenuBtn: {
    display: 'none',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      display: 'block',
    }
  },
  menuIcon: {
    display: 'block',
    width: '25px',
    height: '3px',
    backgroundColor: '#333',
    position: 'relative',
    ':before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#333',
      top: '-8px',
    },
    ':after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#333',
      bottom: '-8px',
    }
  }
};

export default Header;