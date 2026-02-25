const express = require('express');
const router = express.Router();

const subscriptions = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'month',
    popular: false,
    features: [
      'Access to 5 AI games',
      'Basic AI difficulty',
      '10 games per day',
      'Standard leaderboard',
      'Community support'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 9.99,
    period: 'month',
    popular: true,
    features: [
      'Access to all 50+ AI games',
      'Advanced AI difficulty levels',
      'Unlimited games per day',
      'Priority leaderboard',
      'AI coaching & analytics',
      'Custom avatars',
      'Email support'
    ]
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 19.99,
    period: 'month',
    popular: false,
    features: [
      'Everything in Pro',
      'Exclusive Elite-only games',
      'Real-time AI performance insights',
      'Tournament access',
      'Early access to new games',
      'Dedicated AI trainer',
      '24/7 priority support',
      'Custom game themes'
    ]
  }
];

router.get('/', (req, res) => {
  res.json({ success: true, data: subscriptions });
});

module.exports = router;
