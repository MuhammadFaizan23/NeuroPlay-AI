const express = require('express');
const router = express.Router();

const users = [];

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  if (users.find(u => u.email === email)) {
    return res.status(409).json({ success: false, message: 'User already exists' });
  }
  const user = {
    id: users.length + 1,
    username,
    email,
    createdAt: new Date().toISOString(),
    plan: 'free'
  };
  users.push({ ...user, password });
  res.status(201).json({ success: true, data: user, message: 'User registered successfully' });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
  const { password: _, ...userWithoutPassword } = user;
  res.json({ success: true, data: { ...userWithoutPassword, token: 'mock-jwt-token-' + user.id }, message: 'Login successful' });
});

module.exports = router;
