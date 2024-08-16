import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './emailverification.css';

const EmailVerification = ({ generatedOtp }) => {
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationError, setVerificationError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [verificationSuccess, setVerificationSuccess] = useState(false);
    const navigate = useNavigate();

    const handleVerificationSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const response = await axios.post('http://localhost:4000/verify-email', {
                otp: generatedOtp,
                verificationCode: verificationCode
            });

            console.log(response.data.message);
            setVerificationSuccess(true);
            // Redirect to the home page or wherever you want
            navigate('/home');
        } catch (error) {
            console.error('Verification error:', error);
            if (error.response) {
                setVerificationError(error.response.data.error || 'An error occurred during verification.');
            } else {
                setVerificationError('Network error. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="emailVerification">
            <h2>Email Verification</h2>
            <form className="verificationForm" onSubmit={handleVerificationSubmit}>
                <p>Thank you for signing up! An OTP has been sent to your email address.
                    Please enter the OTP below to verify your email.</p>
                <label htmlFor="verificationCode">
                    <strong>Verification Code:</strong>
                </label>
                <input
                    type="text"
                    placeholder="Enter Verification Code"
                    name="verificationCode"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                />
                {verificationError && <p className="verificationError">{verificationError}</p>}
                {verificationSuccess && <p className="verificationSuccess">Verification successful!</p>}
                <button type="submit" className="verificationButton" disabled={isLoading}>
                    {isLoading ? 'Verifying...' : 'Verify'}
                </button>
            </form>
        </div>
    );
};

export default EmailVerification;
