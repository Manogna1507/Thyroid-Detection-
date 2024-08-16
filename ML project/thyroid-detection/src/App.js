import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/pages/Home';
import Symptoms from './Components/pages/Symptoms';
import Tests from './Components/pages/Tests';
import Signin from './Components/pages/Signin';
import Signup from './Components/pages/Signup';
import SymptomChecker from './Components/pages/Symptomchecker';
import EmailVerification from './Components/pages/EmailVerification';
import Results from './Components/pages/Results'; 

function App() {
  const isLoggedIn = () => {
    const userToken = localStorage.getItem('user');
    return !!userToken; // Double negation to convert to boolean
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={isLoggedIn() ? <Navigate to='/home' /> : <Signup />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/tests' element={<Tests/>} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/login" element={<Signin />} />
          <Route path="/symptoms" element={<Symptoms />}/>
          <Route path="/symptomchecker" element={<SymptomChecker />} />
          <Route path="/emailverification" element={<EmailVerification/>} />
          <Route path="/results" element={<Results />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
