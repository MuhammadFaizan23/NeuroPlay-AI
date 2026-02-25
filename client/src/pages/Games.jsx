import React, { useEffect, useState } from 'react';
import { fetchGames } from '../services/api';

const Games = () => {
  const [games, setGames] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Strategy', 'Puzzle', 'Racing', 'Trivia', 'Action'];

  useEffect(() => {
    fetchGames().then(res => {
      setGames(res.data.data);
      setFiltered(res.data.data);
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let result = games;
    if (category !== 'All') result = result.filter(g => g.category === category);
    if (search) result = result.filter(g => g.name.toLowerCase().includes(search.toLowerCase()) || g.description.toLowerCase().includes(search.toLowerCase()));
    setFiltered(result);
  }, [search, category, games]);

  const styles = {
    page: { padding: '48px 24px', maxWidth: '1200px', margin: '0 auto' },
    header: { marginBottom: '40px' },
    title: {
      fontSize: '2.2rem', fontWeight: '900', marginBottom: '8px',
      background: 'linear-gradient(135deg, #f1f5f9, #a78bfa)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
    },
    subtitle: { color: '#94a3b8', fontSize: '1rem' },
    controls: { display: 'flex', gap: '16px', marginBottom: '32px', flexWrap: 'wrap', alignItems: 'center' },
    searchInput: {
      flex: 1, minWidth: '200px', padding: '10px 16px', borderRadius: '10px',
      background: '#12122a', border: '1px solid #1e1e3f', color: '#f1f5f9',
      fontSize: '0.9rem'
    },
    filterBtns: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
    filterBtn: (active) => ({
      padding: '8px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600',
      background: active ? 'linear-gradient(135deg, #7c3aed, #06b6d4)' : '#12122a',
      color: active ? '#fff' : '#94a3b8',
      border: active ? 'none' : '1px solid #1e1e3f',
      cursor: 'pointer', transition: 'all 0.2s',
      boxShadow: active ? '0 0 15px rgba(124,58,237,0.3)' : 'none'
    }),
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '20px'
    },
    card: {
      padding: '28px', borderRadius: '16px', background: '#12122a',
      border: '1px solid #1e1e3f', transition: 'transform 0.2s, box-shadow 0.2s',
      display: 'flex', flexDirection: 'column'
    },
    cardEmoji: { fontSize: '2.8rem', marginBottom: '14px' },
    cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' },
    cardName: { fontSize: '1.15rem', fontWeight: '700', color: '#f1f5f9' },
    cardRating: { color: '#fbbf24', fontSize: '0.9rem', fontWeight: '700' },
    cardCategory: {
      display: 'inline-block', padding: '3px 12px', borderRadius: '12px',
      fontSize: '0.75rem', fontWeight: '600',
      background: 'rgba(124,58,237,0.15)', color: '#a78bfa',
      border: '1px solid rgba(124,58,237,0.3)', marginBottom: '12px'
    },
    cardDesc: { color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '16px', flex: 1 },
    cardFooter: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' },
    cardPlayers: { color: '#64748b', fontSize: '0.8rem' },
    playBtn: {
      padding: '8px 20px', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '700',
      color: '#fff', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
      border: 'none', cursor: 'pointer', boxShadow: '0 0 15px rgba(124,58,237,0.3)'
    },
    empty: { textAlign: 'center', color: '#64748b', padding: '60px 0', fontSize: '1.1rem' },
    loading: { textAlign: 'center', color: '#a78bfa', padding: '60px 0', fontSize: '1.1rem' }
  };

  if (loading) return <div style={styles.loading}>Loading games...</div>;

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>AI Games Library</h1>
        <p style={styles.subtitle}>Discover and play cutting-edge AI-powered games</p>
      </div>
      <div style={styles.controls}>
        <input
          style={styles.searchInput}
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div style={styles.filterBtns}>
          {categories.map(cat => (
            <button key={cat} style={styles.filterBtn(category === cat)} onClick={() => setCategory(cat)}>{cat}</button>
          ))}
        </div>
      </div>
      {filtered.length === 0 ? (
        <div style={styles.empty}>No games found matching your search.</div>
      ) : (
        <div style={styles.grid}>
          {filtered.map(game => (
            <div key={game.id} style={styles.card}>
              <div style={styles.cardEmoji}>{game.image}</div>
              <div style={styles.cardHeader}>
                <div style={styles.cardName}>{game.name}</div>
                <div style={styles.cardRating}>★ {game.rating}</div>
              </div>
              <span style={styles.cardCategory}>{game.category}</span>
              <p style={styles.cardDesc}>{game.description}</p>
              <div style={styles.cardFooter}>
                <span style={styles.cardPlayers}>👥 {game.players?.toLocaleString()} players</span>
                <button style={styles.playBtn}>Play Now</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Games;
