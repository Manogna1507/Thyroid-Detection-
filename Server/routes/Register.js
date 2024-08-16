require('dotenv').config()
const express=require('express')
const router=express.Router()
const login=require('../models/loginmodel')
const nodemailer = require('nodemailer');

router.post ('/register',async(req,res) =>{
    try{
        const { name, email, password}= req.body;

        const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();

        sendOtpEmail(email, generatedOtp);

        const user= new login({
            name:name,
            email:email,
            password:password,
            otp: generatedOtp,
        });
    
    await user.save();
    res.status(201).json({message :"User registered successfully",generatedOtp})
    }
    catch (error)
    {
        console.log(error);
        res.status(500).json({error : 'Internal server error'});
    }

});

function sendOtpEmail(email, otp) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Retrieve from environment variable
            pass: process.env.EMAIL_PASSWORD, // Retrieve from environment variable
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Verification Code',
        text: `Your verification code is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

module.exports = router;