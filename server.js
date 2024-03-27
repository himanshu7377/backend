// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
// console.log(process.env.MONGODB_URL);

// Middleware
app.use(bodyParser.json());

// Database Configuration


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
   
    
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
// register
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);
// login
const userRoutes = require('./routes/userRoutes');
app.use('/auth', userRoutes);

// all user 
const userListRoutes = require('./routes/userListRoutes'); 
app.use('/auth', userListRoutes); 


// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
