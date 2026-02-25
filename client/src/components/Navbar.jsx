import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/games', label: 'Games' },
    { path: '/leaderboard', label: 'Leaderboard' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/dashboard', label: 'Dashboard' }
  ];

  const styles = {
    nav: {
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(10, 10, 26, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #1e1e3f',
      padding: '0 24px'
    },
    inner: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '68px'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '1.3rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    logoIcon: {
      fontSize: '1.5rem'
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      listStyle: 'none'
    },
    navLink: (isActive) => ({
      padding: '6px 14px',
      borderRadius: '8px',
      fontSize: '0.9rem',
      fontWeight: '500',
      color: isActive ? '#06b6d4' : '#94a3b8',
      background: isActive ? 'rgba(6, 182, 212, 0.1)' : 'transparent',
      transition: 'all 0.2s',
      border: isActive ? '1px solid rgba(6, 182, 212, 0.3)' : '1px solid transparent'
    }),
    authButtons: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    },
    loginBtn: {
      padding: '8px 18px',
      borderRadius: '8px',
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#94a3b8',
      background: 'transparent',
      border: '1px solid #1e1e3f',
      transition: 'all 0.2s'
    },
    signupBtn: {
      padding: '8px 18px',
      borderRadius: '8px',
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#fff',
      background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
      border: 'none',
      boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)',
      transition: 'all 0.2s'
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoIcon}>⚡</span>
          NeuroPlay AI
        </Link>
        <ul style={styles.navLinks}>
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                style={styles.navLink(location.pathname === link.path)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div style={styles.authButtons}>
          <button style={styles.loginBtn}>Login</button>
          <button style={styles.signupBtn}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
