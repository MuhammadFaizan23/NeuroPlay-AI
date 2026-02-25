const express = require('express');
const router = express.Router();

const games = [
  {
    id: 1,
    name: 'Neural Chess',
    category: 'Strategy',
    description: 'Experience chess like never before with an AI opponent that adapts to your skill level in real-time.',
    rating: 4.9,
    players: 12500,
    difficulty: 'Adaptive',
    image: '♟️'
  },
  {
    id: 2,
    name: 'Mind Maze',
    category: 'Puzzle',
    description: 'Navigate through AI-generated mazes and puzzles that evolve based on your problem-solving patterns.',
    rating: 4.7,
    players: 8300,
    difficulty: 'Medium',
    image: '🧩'
  },
  {
    id: 3,
    name: 'DeepDuel',
    category: 'Action',
    description: 'PvP battles enhanced with real-time AI coaching to help you improve your strategy mid-game.',
    rating: 4.8,
    players: 15200,
    difficulty: 'Hard',
    image: '⚔️'
  },
  {
    id: 4,
    name: 'StratoBot',
    category: 'Strategy',
    description: 'Command armies against sophisticated AI opponents using advanced machine learning tactics.',
    rating: 4.6,
    players: 9800,
    difficulty: 'Hard',
    image: '🤖'
  },
  {
    id: 5,
    name: 'NeuroDrift',
    category: 'Racing',
    description: 'High-speed AI racing where opponents learn your driving style and create the perfect challenge.',
    rating: 4.5,
    players: 11000,
    difficulty: 'Medium',
    image: '🏎️'
  },
  {
    id: 6,
    name: 'AlphaQuiz',
    category: 'Trivia',
    description: 'AI-powered trivia that adapts questions to your knowledge gaps and learning preferences.',
    rating: 4.4,
    players: 7600,
    difficulty: 'Easy',
    image: '🧠'
  },
  {
    id: 7,
    name: 'CognitiveClash',
    category: 'Puzzle',
    description: 'Brain training battles against AI that analyzes your cognitive patterns to push your limits.',
    rating: 4.7,
    players: 6200,
    difficulty: 'Adaptive',
    image: '💡'
  },
  {
    id: 8,
    name: 'ProxyWars',
    category: 'Strategy',
    description: 'Tower defense evolved — AI enemies adapt their attack strategies based on your defenses.',
    rating: 4.6,
    players: 10400,
    difficulty: 'Hard',
    image: '🏰'
  }
];

router.get('/', (req, res) => {
  res.json({ success: true, data: games, total: games.length });
});

router.get('/:id', (req, res) => {
  const game = games.find(g => g.id === parseInt(req.params.id));
  if (!game) {
    return res.status(404).json({ success: false, message: 'Game not found' });
  }
  res.json({ success: true, data: game });
});

module.exports = router;
