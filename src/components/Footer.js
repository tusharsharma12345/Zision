import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.footerContainer}>
        <div style={styles.footerInfo}>
          <h3 style={styles.footerTitle}>Zision IT Consulting and Services</h3>
          <p style={styles.footerAddress}>
           Heera Colony Sikandrabad<br />
           District- Bulandshahr Uttar Pradesh India 203205
          </p>
          <p style={styles.footerContact}>
          Phone: <a href="tel:+91 9528288569">+91 9528288569<br /></a>
          Email: <a href="mailto:t494324@gmail.com">t494324@gmail.com<br/></a>
           
           
          </p>
        </div>
        
        <div style={styles.socialLinks}>
         
          <a href="https://www.linkedin.com/company/zision/about/?viewAsMember=true" style={styles.socialLink} aria-label="LinkedIn" target='_blank'>
            <i className="fab fa-linkedin-in"></i>
          </a>
          
        </div>
        
        <div style={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Zision IT Consulting and Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '50px 0 20px',
  },
  footerContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  footerInfo: {
    marginBottom: '20px',
  },
  footerTitle: {
    color: '#fff',
    fontSize: '20px',
    marginBottom: '15px',
  },
  footerAddress: {
    marginBottom: '15px',
    fontStyle: 'normal',
    lineHeight: '1.6',
  },
  footerContact: {
    marginBottom: '15px',
    lineHeight: '1.6',
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#3498db',
    }
  },
  copyright: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '20px',
    textAlign: 'center',
    gridColumn: '1 / -1',
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)',
  }
};

export default Footer;