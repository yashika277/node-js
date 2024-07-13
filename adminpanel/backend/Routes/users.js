const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = new User({ username, password });
        user.password = await bcrypt.hash(password, 10);
        await user.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).send('Invalid credentials');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');

        const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: 3600 });
        res.json({ token });
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
