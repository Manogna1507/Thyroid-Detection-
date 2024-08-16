import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signin.css";


function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try
    {
      setLoading(true);
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email,password }),
      });

      if (!response.ok) {
      
        toast.error("login failed");      
      }

      else 
      {
        const data = await response.json();
        const user= data.user
        toast.success("Login is successful");
        navigate('/home');
        console.log(user)
        localStorage.setItem('user', user)
      }
      // You might want to set the user data in your component state or a context
      // setUserData(data.user);
    } 
    catch (error) 
    {
      console.error('Error during login:', error.message);
    }
      
    finally 
    {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="loginForm">
        <h2 className="loginTitle">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="loginForm">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="loginInput"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="loginForm">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="loginInput"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="loginButton w-100 rounded-5" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {error && <p className="text-danger mt-2">{error}</p>}
        <p>To create an Account</p>
        <Link to="/register" className="loginRegisterLink">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Signin;