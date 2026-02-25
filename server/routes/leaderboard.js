const express = require('express');
const router = express.Router();

const leaderboard = [
  { rank: 1, username: 'NeuralNinja', gamesPlayed: 342, wins: 289, score: 98450, winRate: '84.5%' },
  { rank: 2, username: 'CyberSage', gamesPlayed: 298, wins: 241, score: 87320, winRate: '80.9%' },
  { rank: 3, username: 'QuantumKnight', gamesPlayed: 415, wins: 318, score: 82100, winRate: '76.6%' },
  { rank: 4, username: 'AIWhisperer', gamesPlayed: 276, wins: 198, score: 74560, winRate: '71.7%' },
  { rank: 5, username: 'DeepMindX', gamesPlayed: 389, wins: 271, score: 68900, winRate: '69.7%' },
  { rank: 6, username: 'SynapticFury', gamesPlayed: 312, wins: 210, score: 61230, winRate: '67.3%' },
  { rank: 7, username: 'BinaryBeast', gamesPlayed: 445, wins: 289, score: 57840, winRate: '65.0%' },
  { rank: 8, username: 'TensorTitan', gamesPlayed: 267, wins: 167, score: 52100, winRate: '62.5%' },
  { rank: 9, username: 'GradientGod', gamesPlayed: 198, wins: 119, score: 44780, winRate: '60.1%' },
  { rank: 10, username: 'AlgoAce', gamesPlayed: 321, wins: 189, score: 39650, winRate: '58.9%' }
];

router.get('/', (req, res) => {
  res.json({ success: true, data: leaderboard });
});

module.exports = router;
