import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchGames } from '../services/api';

const Home = () => {
  const [featuredGames, setFeaturedGames] = useState([]);

  useEffect(() => {
    fetchGames().then(res => setFeaturedGames(res.data.data.slice(0, 4))).catch(() => {});
  }, []);

  const styles = {
    hero: {
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '60px 24px',
      background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, rgba(10,10,26,0) 70%)',
      position: 'relative',
      overflow: 'hidden'
    },
    heroBg: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 20% 50%, rgba(124,58,237,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(6,182,212,0.08) 0%, transparent 50%)',
      pointerEvents: 'none'
    },
    heroContent: {
      maxWidth: '800px',
      position: 'relative',
      zIndex: 1
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 16px',
      borderRadius: '20px',
      background: 'rgba(124,58,237,0.15)',
      border: '1px solid rgba(124,58,237,0.3)',
      color: '#a78bfa',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '24px'
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 7vw, 5rem)',
      fontWeight: '900',
      lineHeight: '1.1',
      marginBottom: '24px',
      background: 'linear-gradient(135deg, #f1f5f9 0%, #a78bfa 50%, #06b6d4 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroSubtitle: {
      fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
      color: '#94a3b8',
      marginBottom: '40px',
      lineHeight: '1.6'
    },
    heroCtas: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryBtn: {
      padding: '14px 32px',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '700',
      color: '#fff',
      background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
      border: 'none',
      boxShadow: '0 0 30px rgba(124,58,237,0.4)',
      transition: 'transform 0.2s, box-shadow 0.2s'
    },
    secondaryBtn: {
      padding: '14px 32px',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '700',
      color: '#f1f5f9',
      background: 'transparent',
      border: '2px solid #1e1e3f',
      transition: 'all 0.2s'
    },
    section: {
      padding: '80px 24px'
    },
    sectionInner: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: '800',
      textAlign: 'center',
      marginBottom: '12px',
      background: 'linear-gradient(135deg, #f1f5f9, #a78bfa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    sectionSubtitle: {
      color: '#94a3b8',
      textAlign: 'center',
      marginBottom: '48px',
      fontSize: '1rem'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px'
    },
    featureCard: {
      padding: '32px',
      borderRadius: '16px',
      background: 'linear-gradient(135deg, #12122a, #0f0f2e)',
      border: '1px solid #1e1e3f',
      transition: 'transform 0.2s, box-shadow 0.2s'
    },
    featureIcon: {
      fontSize: '2.5rem',
      marginBottom: '16px'
    },
    featureTitle: {
      fontSize: '1.2rem',
      fontWeight: '700',
      marginBottom: '10px',
      color: '#f1f5f9'
    },
    featureDesc: {
      color: '#94a3b8',
      fontSize: '0.9rem',
      lineHeight: '1.6'
    },
    gamesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '20px'
    },
    gameCard: {
      padding: '24px',
      borderRadius: '16px',
      background: '#12122a',
      border: '1px solid #1e1e3f',
      transition: 'transform 0.2s'
    },
    gameEmoji: {
      fontSize: '2.5rem',
      marginBottom: '12px'
    },
    gameName: {
      fontSize: '1.1rem',
      fontWeight: '700',
      marginBottom: '6px'
    },
    gameCategory: {
      display: 'inline-block',
      padding: '2px 10px',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: '600',
      background: 'rgba(6,182,212,0.15)',
      color: '#06b6d4',
      border: '1px solid rgba(6,182,212,0.3)',
      marginBottom: '10px'
    },
    gameDesc: {
      color: '#94a3b8',
      fontSize: '0.85rem',
      lineHeight: '1.5',
      marginBottom: '16px'
    },
    gameRating: {
      color: '#fbbf24',
      fontSize: '0.9rem',
      fontWeight: '600'
    },
    statsSection: {
      background: '#0f0f2e',
      borderTop: '1px solid #1e1e3f',
      borderBottom: '1px solid #1e1e3f'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '32px',
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '900',
      background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '6px'
    },
    statLabel: {
      color: '#94a3b8',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    ctaSection: {
      textAlign: 'center',
      background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.1) 0%, transparent 70%)'
    }
  };

  const features = [
    { icon: '🤖', title: 'AI-Powered Opponents', desc: 'Battle against sophisticated AI that learns and adapts to your playstyle in real-time, providing the perfect challenge every time.' },
    { icon: '📊', title: 'Smart Analytics', desc: 'Deep insights into your gaming performance with AI-driven analytics that help you identify strengths and improve weaknesses.' },
    { icon: '🌐', title: 'Cross-Platform', desc: 'Play seamlessly across all your devices. Your progress, stats, and achievements sync instantly everywhere.' }
  ];

  const stats = [
    { number: '10K+', label: 'Active Players' },
    { number: '50+', label: 'AI Games' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroBg} />
        <div style={styles.heroContent}>
          <div style={styles.badge}>
            <span>🧠</span>
            <span>Next-Gen AI Gaming Platform</span>
          </div>
          <h1 style={styles.heroTitle}>NeuroPlay AI</h1>
          <p style={styles.heroSubtitle}>
            Where AI Meets Gaming Excellence.<br />
            Experience the future of intelligent gaming with adaptive AI opponents, real-time analytics, and immersive challenges.
          </p>
          <div style={styles.heroCtas}>
            <Link to="/games">
              <button style={styles.primaryBtn}>Explore Games</button>
            </Link>
            <Link to="/pricing">
              <button style={styles.secondaryBtn}>View Plans</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>Why Choose NeuroPlay AI?</h2>
          <p style={styles.sectionSubtitle}>Cutting-edge technology meets gaming passion</p>
          <div style={styles.featuresGrid}>
            {features.map(f => (
              <div key={f.title} style={styles.featureCard}>
                <div style={styles.featureIcon}>{f.icon}</div>
                <h3 style={styles.featureTitle}>{f.title}</h3>
                <p style={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section style={{ ...styles.section, background: '#0f0f2e', borderTop: '1px solid #1e1e3f', borderBottom: '1px solid #1e1e3f' }}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>Featured Games</h2>
          <p style={styles.sectionSubtitle}>Handpicked AI experiences for every type of player</p>
          <div style={styles.gamesGrid}>
            {featuredGames.map(game => (
              <div key={game.id} style={styles.gameCard}>
                <div style={styles.gameEmoji}>{game.image}</div>
                <div style={styles.gameName}>{game.name}</div>
                <span style={styles.gameCategory}>{game.category}</span>
                <p style={styles.gameDesc}>{game.description}</p>
                <div style={styles.gameRating}>★ {game.rating}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/games">
              <button style={styles.primaryBtn}>View All Games</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ ...styles.statsSection, ...styles.section }}>
        <div style={styles.sectionInner}>
          <div style={styles.statsGrid}>
            {stats.map(stat => (
              <div key={stat.label}>
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...styles.section, ...styles.ctaSection }}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>Ready to Play?</h2>
          <p style={styles.sectionSubtitle}>Join thousands of players experiencing the future of AI gaming</p>
          <div style={styles.heroCtas}>
            <Link to="/pricing">
              <button style={styles.primaryBtn}>Get Started Free</button>
            </Link>
            <Link to="/leaderboard">
              <button style={styles.secondaryBtn}>View Leaderboard</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
