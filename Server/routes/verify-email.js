const express = require('express');
const router = express.Router();
const login = require('../models/loginmodel');

router.post('/verify-email', async (req, res) => {
    try {
        const { verificationCode } = req.body;

        // Retrieve the user from the database using the OTP
        const user = await login.findOne({ otp : verificationCode });

        if (!user) {
            return res.status(404).json({ error: 'User not found or invalid OTP' });
        }
            user.isVerified = true;
            await user.save();

            res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
        console.error('Verification error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
