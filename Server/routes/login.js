const express = require('express');
const router = express.Router();
const login = require('../models/loginmodel.js'); // Import your user model

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists with the provided email
    const user = await login.findOne({ email });

    if (!user) {
      // User not found
      return res.status(401).json({ error: 'Invalid email id' });
    }
    if (user.password === password) 
    {
        return res.status(200).json({ message: 'Login successful', user });
    }
      
    // Compare passwords (insecure without hashing)
    else (user.password !== password)
    {
      // Password is incorrect
      return res.status(401).json({ error:'invalid password' });
    }

    // At this point, the user is authenticated
    // You might want to generate a token or set a session, depending on your authentication strategy


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
