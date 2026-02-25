import React from 'react';

const Dashboard = () => {
  const stats = [
    { icon: '🎮', label: 'Games Played', value: '247', change: '+12 this week' },
    { icon: '🏆', label: 'Win Rate', value: '68%', change: '+3% this month' },
    { icon: '📊', label: 'Global Rank', value: '#142', change: '↑ 28 places' },
    { icon: '⏱️', label: 'Hours Played', value: '124h', change: '+8h this week' }
  ];

  const recentGames = [
    { game: '♟️ Neural Chess', result: 'Win', score: 1250, date: '2 hours ago', opponent: 'AI-Master' },
    { game: '🧩 Mind Maze', result: 'Win', score: 980, date: '5 hours ago', opponent: 'AI-Expert' },
    { game: '⚔️ DeepDuel', result: 'Loss', score: 430, date: '1 day ago', opponent: 'AI-Champion' },
    { game: '🤖 StratoBot', result: 'Win', score: 1100, date: '1 day ago', opponent: 'AI-Master' },
    { game: '🏎️ NeuroDrift', result: 'Win', score: 875, date: '2 days ago', opponent: 'AI-Expert' }
  ];

  const achievements = [
    { icon: '🔥', title: 'Hot Streak', desc: '10 wins in a row' },
    { icon: '🧠', title: 'Brain Power', desc: 'Beat 100 AI opponents' },
    { icon: '⚡', title: 'Speed Demon', desc: 'Sub 1min game finish' },
    { icon: '🎯', title: 'Precision', desc: '90%+ accuracy in Trivia' },
    { icon: '🌟', title: 'Rising Star', desc: 'Top 200 leaderboard' },
    { icon: '💎', title: 'Diamond', desc: 'Pro member 6 months' }
  ];

  const styles = {
    page: { padding: '48px 24px', maxWidth: '1200px', margin: '0 auto' },
    header: { marginBottom: '40px' },
    title: {
      fontSize: '2rem', fontWeight: '900', marginBottom: '6px',
      background: 'linear-gradient(135deg, #f1f5f9, #a78bfa)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
    },
    subtitle: { color: '#94a3b8' },
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' },
    statCard: {
      padding: '24px', borderRadius: '16px', background: '#12122a',
      border: '1px solid #1e1e3f', display: 'flex', flexDirection: 'column', gap: '8px'
    },
    statIcon: { fontSize: '1.8rem' },
    statValue: {
      fontSize: '2rem', fontWeight: '900',
      background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
    },
    statLabel: { color: '#94a3b8', fontSize: '0.875rem', fontWeight: '600' },
    statChange: { color: '#34d399', fontSize: '0.8rem', fontWeight: '600' },
    section: { marginBottom: '40px' },
    sectionTitle: { fontSize: '1.3rem', fontWeight: '800', marginBottom: '20px', color: '#f1f5f9' },
    tableWrapper: { background: '#12122a', borderRadius: '16px', border: '1px solid #1e1e3f', overflow: 'hidden' },
    table: { width: '100%', borderCollapse: 'collapse' },
    th: {
      padding: '14px 20px', textAlign: 'left', fontSize: '0.78rem',
      fontWeight: '700', color: '#64748b', textTransform: 'uppercase',
      letterSpacing: '0.08em', borderBottom: '1px solid #1e1e3f', background: '#0f0f2e'
    },
    td: { padding: '14px 20px', fontSize: '0.9rem', color: '#f1f5f9', borderBottom: '1px solid rgba(30,30,63,0.5)' },
    result: (r) => ({
      display: 'inline-block', padding: '3px 12px', borderRadius: '12px', fontSize: '0.78rem', fontWeight: '700',
      background: r === 'Win' ? 'rgba(52,211,153,0.15)' : 'rgba(248,113,113,0.15)',
      color: r === 'Win' ? '#34d399' : '#f87171',
      border: r === 'Win' ? '1px solid rgba(52,211,153,0.3)' : '1px solid rgba(248,113,113,0.3)'
    }),
    achievementsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' },
    achievementCard: {
      padding: '20px', borderRadius: '14px', background: '#12122a',
      border: '1px solid #1e1e3f', textAlign: 'center'
    },
    achIcon: { fontSize: '2rem', marginBottom: '8px' },
    achTitle: { fontWeight: '700', fontSize: '0.9rem', marginBottom: '4px', color: '#f1f5f9' },
    achDesc: { color: '#64748b', fontSize: '0.78rem' }
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>👋 Welcome back, Player!</h1>
        <p style={styles.subtitle}>Here's your gaming performance overview</p>
      </div>

      <div style={styles.statsGrid}>
        {stats.map(stat => (
          <div key={stat.label} style={styles.statCard}>
            <div style={styles.statIcon}>{stat.icon}</div>
            <div style={styles.statValue}>{stat.value}</div>
            <div style={styles.statLabel}>{stat.label}</div>
            <div style={styles.statChange}>{stat.change}</div>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Recent Games</div>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Game</th>
                <th style={styles.th}>Result</th>
                <th style={styles.th}>Score</th>
                <th style={styles.th}>Opponent</th>
                <th style={styles.th}>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentGames.map((game, i) => (
                <tr key={i}>
                  <td style={styles.td}>{game.game}</td>
                  <td style={styles.td}><span style={styles.result(game.result)}>{game.result}</span></td>
                  <td style={styles.td}>{game.score.toLocaleString()}</td>
                  <td style={styles.td}>{game.opponent}</td>
                  <td style={{ ...styles.td, color: '#64748b' }}>{game.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Achievements</div>
        <div style={styles.achievementsGrid}>
          {achievements.map(ach => (
            <div key={ach.title} style={styles.achievementCard}>
              <div style={styles.achIcon}>{ach.icon}</div>
              <div style={styles.achTitle}>{ach.title}</div>
              <div style={styles.achDesc}>{ach.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
