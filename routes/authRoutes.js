// routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name, email, password, phone, profession } = req.body;
         // Check if user already exists
         const existingUser = await User.findOne({ email });
         if (existingUser) {
             return res.status(400).json({ error: 'User already exists' });
         }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, phone, profession });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Registration failed' });
    }
});

module.exports = router;
