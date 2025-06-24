// src/App.js
import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './LoginPage';

function App() {
  const [page, setPage] = useState('landing');

  return (
    <>
      {page === 'landing' ? (
        <LandingPage onGoToLogin={() => setPage('login')} />
      ) : (
        <LoginPage onBack={() => setPage('landing')} />
      )}
    </>
  );
}

export default App;
