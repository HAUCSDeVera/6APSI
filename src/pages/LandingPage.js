// src/pages/LandingPage.jsx
import React from 'react';
import '../styles/Landing.css';

const LandingPage = ({ onGoToLogin }) => {
  return (
    <div className="landing-container">
      <h1>Welcome to 6APSI</h1>
      <p>Your academic portal starts here.</p>
      <button className="btn" onClick={onGoToLogin}>Go to Login</button>
    </div>
  );
};

export default LandingPage;
