import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const styles = {
    footer: {
      background: '#0f0f2e',
      borderTop: '1px solid #1e1e3f',
      padding: '48px 24px 24px'
    },
    inner: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '32px',
      marginBottom: '40px'
    },
    brand: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    logo: {
      fontSize: '1.3rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    tagline: {
      color: '#94a3b8',
      fontSize: '0.85rem',
      lineHeight: '1.5'
    },
    colTitle: {
      fontWeight: '700',
      marginBottom: '14px',
      color: '#f1f5f9',
      fontSize: '0.95rem'
    },
    colLinks: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    colLink: {
      color: '#94a3b8',
      fontSize: '0.875rem',
      transition: 'color 0.2s'
    },
    bottom: {
      borderTop: '1px solid #1e1e3f',
      paddingTop: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px'
    },
    copy: {
      color: '#64748b',
      fontSize: '0.85rem'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.grid}>
          <div style={styles.brand}>
            <div style={styles.logo}>⚡ NeuroPlay AI</div>
            <p style={styles.tagline}>Where AI Meets Gaming Excellence. The future of intelligent gaming is here.</p>
          </div>
          <div>
            <div style={styles.colTitle}>Platform</div>
            <ul style={styles.colLinks}>
              {['Games', 'Leaderboard', 'Pricing', 'Dashboard'].map(item => (
                <li key={item}><Link to={`/${item.toLowerCase()}`} style={styles.colLink}>{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div style={styles.colTitle}>Company</div>
            <ul style={styles.colLinks}>
              {['About Us', 'Blog', 'Careers', 'Press'].map(item => (
                <li key={item}><a href="#" style={styles.colLink}>{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div style={styles.colTitle}>Support</div>
            <ul style={styles.colLinks}>
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map(item => (
                <li key={item}><a href="#" style={styles.colLink}>{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div style={styles.bottom}>
          <p style={styles.copy}>© 2024 NeuroPlay AI. All rights reserved.</p>
          <p style={styles.copy}>Built with ❤️ for the future of gaming</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
