// Import necessary modules
const express = require('express');
const router = express.Router();
const login= require('../models/loginmodel'); // Import your User model

// Reset password endpoint
router.put('/reset', async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    // Find the user by email
    const user = await login.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's password
    user.password = newPassword
    
    password;

    // Save the updated user to the database
    const updatedUser = await user.save();

    res.status(200).json({ message: 'Password updated successfully', user: updatedUser });
  }
  catch (error) 
  {
    console.error('Error updating password failed to :', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Export the router
module.exports = router;
