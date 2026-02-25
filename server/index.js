const express = require('express');
const cors = require('cors');
const gamesRouter = require('./routes/games');
const usersRouter = require('./routes/users');
const leaderboardRouter = require('./routes/leaderboard');
const subscriptionsRouter = require('./routes/subscriptions');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/games', gamesRouter);
app.use('/api/users', usersRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/subscriptions', subscriptionsRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'NeuroPlay AI Server is running' });
});

app.listen(PORT, () => {
  console.log(`NeuroPlay AI server running on port ${PORT}`);
});
