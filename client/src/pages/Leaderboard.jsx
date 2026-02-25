import React, { useEffect, useState } from 'react';
import { fetchLeaderboard } from '../services/api';

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard().then(res => setPlayers(res.data.data)).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const rankStyles = {
    1: { color: '#fbbf24', icon: '🥇' },
    2: { color: '#94a3b8', icon: '🥈' },
    3: { color: '#cd7c2f', icon: '🥉' }
  };

  const styles = {
    page: { padding: '48px 24px', maxWidth: '1000px', margin: '0 auto' },
    header: { marginBottom: '40px', textAlign: 'center' },
    title: {
      fontSize: '2.2rem', fontWeight: '900', marginBottom: '8px',
      background: 'linear-gradient(135deg, #f1f5f9, #fbbf24)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
    },
    subtitle: { color: '#94a3b8' },
    tableWrapper: {
      background: '#12122a', borderRadius: '16px', border: '1px solid #1e1e3f', overflow: 'hidden'
    },
    table: { width: '100%', borderCollapse: 'collapse' },
    th: {
      padding: '16px 20px', textAlign: 'left', fontSize: '0.8rem',
      fontWeight: '700', color: '#64748b', textTransform: 'uppercase',
      letterSpacing: '0.08em', borderBottom: '1px solid #1e1e3f',
      background: '#0f0f2e'
    },
    tr: (index) => ({
      borderBottom: '1px solid #1e1e3f',
      background: index % 2 === 0 ? 'transparent' : 'rgba(124,58,237,0.03)',
      transition: 'background 0.2s'
    }),
    td: { padding: '16px 20px', fontSize: '0.9rem', color: '#f1f5f9' },
    rankCell: (rank) => ({
      fontWeight: '900', fontSize: '1rem',
      color: rankStyles[rank]?.color || '#94a3b8',
      display: 'flex', alignItems: 'center', gap: '8px'
    }),
    username: { fontWeight: '700', color: '#f1f5f9' },
    score: { fontWeight: '800', color: '#a78bfa', fontSize: '0.95rem' },
    winRate: { color: '#34d399', fontWeight: '600' },
    loading: { textAlign: 'center', color: '#a78bfa', padding: '60px 0' }
  };

  if (loading) return <div style={styles.loading}>Loading leaderboard...</div>;

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>🏆 Global Leaderboard</h1>
        <p style={styles.subtitle}>Top players competing in AI gaming</p>
      </div>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Rank</th>
              <th style={styles.th}>Player</th>
              <th style={styles.th}>Games Played</th>
              <th style={styles.th}>Wins</th>
              <th style={styles.th}>Win Rate</th>
              <th style={styles.th}>Score</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.rank} style={styles.tr(index)}>
                <td style={styles.td}>
                  <div style={styles.rankCell(player.rank)}>
                    {rankStyles[player.rank]?.icon || `#${player.rank}`}
                  </div>
                </td>
                <td style={styles.td}><span style={styles.username}>{player.username}</span></td>
                <td style={styles.td}>{player.gamesPlayed.toLocaleString()}</td>
                <td style={styles.td}>{player.wins.toLocaleString()}</td>
                <td style={styles.td}><span style={styles.winRate}>{player.winRate}</span></td>
                <td style={styles.td}><span style={styles.score}>{player.score.toLocaleString()}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
