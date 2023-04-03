import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate  } from 'react-router-dom';
import ChatWindow from './ChatBot/ChatWindow';

const Dashboard = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {isAuthenticated && (
        <>
          <ChatWindow />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
