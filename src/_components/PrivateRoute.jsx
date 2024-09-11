// src/_components/PrivateRoute.jsx
import React from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const location = useLocation();
    const isAuthenticated = Boolean(localStorage.getItem('user'));

    return isAuthenticated ? Component : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;