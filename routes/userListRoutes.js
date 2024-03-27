// userListRoutes.js
const express = require('express');
const User = require('../models/User');

const router = express.Router();

// List all registered users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        console.log(users)
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
