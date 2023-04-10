import React from 'react';
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

const WithAuthProtection = (WrappedComponent) => {
    const AuthProtectedComponent = (props) => {
        const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);

        if (!isAuthenticated) {
            return <Navigate to="/" replace/>;
        }

        return <WrappedComponent {...props} />;
    };

    return AuthProtectedComponent;
};

export default WithAuthProtection;
