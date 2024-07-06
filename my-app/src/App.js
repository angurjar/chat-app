import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from './pages/chatPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/chat" component={ChatPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
