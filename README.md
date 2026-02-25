# NeuroPlay AI – AI Gaming Service Platform

A full-stack web application where AI meets gaming excellence.

## Tech Stack

- **Backend**: Node.js / Express REST API (`/server`)
- **Frontend**: React 18 + Vite (`/client`)

## Features

- 🎮 **AI Games Library** – 8 AI-powered games across Strategy, Puzzle, Racing, Trivia, and Action categories with search and filter
- 🏆 **Global Leaderboard** – Top 10 players with stats (wins, win rate, score)
- 💰 **Pricing Plans** – Free, Pro ($9.99/mo), and Elite ($19.99/mo) subscription tiers
- 📊 **Player Dashboard** – Stats overview, recent game history, and achievements

## Project Structure

```
NeuroPlay-AI/
├── package.json          # Root scripts
├── server/               # Express backend (port 5000)
│   ├── index.js
│   ├── package.json
│   └── routes/
│       ├── games.js
│       ├── leaderboard.js
│       ├── subscriptions.js
│       └── users.js
└── client/               # React + Vite frontend (port 3000)
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── index.css
        ├── components/
        │   ├── Navbar.jsx
        │   └── Footer.jsx
        ├── pages/
        │   ├── Home.jsx
        │   ├── Games.jsx
        │   ├── Leaderboard.jsx
        │   ├── Pricing.jsx
        │   └── Dashboard.jsx
        └── services/
            └── api.js
```

## Getting Started

### Install dependencies

```bash
cd server && npm install
cd ../client && npm install
```

### Run the backend

```bash
node server/index.js
# Server runs on http://localhost:5000
```

### Run the frontend

```bash
cd client && npm run dev
# App runs on http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/games` | List all games |
| GET | `/api/games/:id` | Get game by ID |
| GET | `/api/leaderboard` | Global leaderboard |
| GET | `/api/subscriptions` | Subscription plans |
| POST | `/api/users/register` | Register user |
| POST | `/api/users/login` | Login user |
Full-Stack Developer specializing in E-commerce Systems, AI Platforms &amp; High-Performance Web Apps | PHP • React • Node.js
