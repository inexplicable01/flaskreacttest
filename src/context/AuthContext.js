import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const login = (username, password) => {
    if (password === "password") {
      setIsAuthenticated(true);
      setErrorMessage('');
    } else {
      setIsAuthenticated(false);
      setErrorMessage('Password is incorrect.');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, errorMessage, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
