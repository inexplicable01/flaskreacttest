import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/');
    return null;
  }

  return <Outlet />;
};

export default PrivateRoute;
