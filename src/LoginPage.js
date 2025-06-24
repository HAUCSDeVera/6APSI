import React from 'react';
import './styles/Login.css';

function LoginPage({ onBack }) {
  return (
    <div className='login-container'>
      <h2>Login</h2>
      
      <input
        type="text"
        placeholder="Username"
      /><br />

      <input
        type="password"
        placeholder="Password"
      /><br />

      <button>Login</button>

      {onBack && (
        <div style={{ marginTop: '10px' }}>
          <button className="btn" onClick={onBack}>
            Back to Landing
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
