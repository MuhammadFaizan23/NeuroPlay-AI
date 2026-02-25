import React, { useEffect, useState } from 'react';
import { fetchSubscriptions } from '../services/api';

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscriptions().then(res => setPlans(res.data.data)).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const styles = {
    page: { padding: '60px 24px', maxWidth: '1100px', margin: '0 auto' },
    header: { textAlign: 'center', marginBottom: '60px' },
    title: {
      fontSize: '2.2rem', fontWeight: '900', marginBottom: '12px',
      background: 'linear-gradient(135deg, #f1f5f9, #a78bfa)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
    },
    subtitle: { color: '#94a3b8', fontSize: '1.05rem' },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
      gap: '24px',
      alignItems: 'stretch'
    },
    card: (popular) => ({
      padding: '36px 28px', borderRadius: '20px',
      background: popular ? 'linear-gradient(135deg, #12122a, #1a1040)' : '#12122a',
      border: popular ? '2px solid #7c3aed' : '1px solid #1e1e3f',
      position: 'relative', display: 'flex', flexDirection: 'column',
      boxShadow: popular ? '0 0 40px rgba(124,58,237,0.2)' : 'none',
      transition: 'transform 0.2s'
    }),
    popularBadge: {
      position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)',
      padding: '4px 16px', borderRadius: '12px', fontSize: '0.78rem', fontWeight: '700',
      background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', color: '#fff',
      whiteSpace: 'nowrap'
    },
    planName: { fontSize: '1.3rem', fontWeight: '800', marginBottom: '8px', color: '#f1f5f9' },
    price: {
      display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '24px'
    },
    priceDollar: { fontSize: '1.2rem', fontWeight: '700', color: '#94a3b8', marginBottom: '8px' },
    priceAmount: {
      fontSize: '3rem', fontWeight: '900', lineHeight: '1',
      background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
    },
    pricePeriod: { fontSize: '0.9rem', color: '#64748b', marginBottom: '6px' },
    divider: { borderColor: '#1e1e3f', marginBottom: '24px' },
    featureList: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, marginBottom: '32px' },
    featureItem: { display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8', fontSize: '0.9rem' },
    featureCheck: { color: '#34d399', fontWeight: '700', flexShrink: 0 },
    ctaBtn: (popular) => ({
      width: '100%', padding: '14px', borderRadius: '12px', fontSize: '1rem', fontWeight: '700',
      cursor: 'pointer', transition: 'all 0.2s',
      background: popular ? 'linear-gradient(135deg, #7c3aed, #06b6d4)' : 'transparent',
      color: popular ? '#fff' : '#a78bfa',
      border: popular ? 'none' : '2px solid #7c3aed',
      boxShadow: popular ? '0 0 25px rgba(124,58,237,0.3)' : 'none',
      marginTop: 'auto'
    }),
    loading: { textAlign: 'center', color: '#a78bfa', padding: '60px 0' }
  };

  if (loading) return <div style={styles.loading}>Loading plans...</div>;

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>Simple, Transparent Pricing</h1>
        <p style={styles.subtitle}>Choose the plan that fits your gaming journey</p>
      </div>
      <div style={styles.grid}>
        {plans.map(plan => (
          <div key={plan.id} style={styles.card(plan.popular)}>
            {plan.popular && <div style={styles.popularBadge}>⭐ Most Popular</div>}
            <div style={styles.planName}>{plan.name}</div>
            <div style={styles.price}>
              {plan.price > 0 && <span style={styles.priceDollar}>$</span>}
              <span style={styles.priceAmount}>{plan.price === 0 ? 'Free' : plan.price}</span>
              {plan.price > 0 && <span style={styles.pricePeriod}>/mo</span>}
            </div>
            <hr style={styles.divider} />
            <ul style={styles.featureList}>
              {plan.features.map(f => (
                <li key={f} style={styles.featureItem}>
                  <span style={styles.featureCheck}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button style={styles.ctaBtn(plan.popular)}>
              {plan.price === 0 ? 'Get Started Free' : `Choose ${plan.name}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
