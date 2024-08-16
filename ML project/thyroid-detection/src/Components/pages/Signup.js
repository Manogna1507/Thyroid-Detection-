import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import EmailVerification from "./EmailVerification";
import './register.css';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showEmailVerification, setShowEmailVerification] = useState(false);
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const buttonStyle = {
        cursor: "pointer",
        backgroundColor: "lightcoral",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "12px",
        textAlign: "center",
        fontSize: "18px",
        transition: "background-color 0.3s",
        textDecoration: "none",
        display: "inline-block",
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            alert("Please fill in all required fields.");
            return;
        }
        try {
            const result = await axios.post('http://localhost:4000/register', { name, email, password });
            const otpFromServer = result.data.generatedOtp;

            console.log(result);
            console.log('OTP:', otpFromServer);
            setOtp(otpFromServer.generatedOtp);

            setShowEmailVerification(true);
            navigate('/emailverification');

        } catch (err) {
            console.log('Network Error:', err.message);
        }
    };

    return (
        <div className="register">
            <div className="registerTitle">
                {showEmailVerification ? (
                    <EmailVerification generatedOtp={otp}/>
                ) : (
                    <>
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="registerForm">
                                <label htmlFor="email">
                                    <strong>Name</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    autoComplete="off"
                                    name="email"
                                    className="registerInput"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="registerForm">
                                <label htmlFor="email">
                                    <strong>Email</strong>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    autoComplete="off"
                                    name="email"
                                    className="registerInput"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="registerForm">
                                <label htmlFor="email">
                                    <strong>Password</strong>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    name="password"
                                    className="registerInput"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button onClick={handleSubmit} style={buttonStyle}>Sign Up</button>
                        </form>
                        <p className="registerLoginText">
                            Already Have an Account?
                            <Link to="/login" className="registerLoginLink">
                                Login
                            </Link>
                        </p>
                    </>
                )}

            </div>
        </div>
    );
}

export default Signup;
