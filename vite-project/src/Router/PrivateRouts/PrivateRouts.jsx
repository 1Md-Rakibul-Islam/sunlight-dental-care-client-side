import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivateRouts = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className='text-5xl text-center my-auto mx-auto'><button className='btn btn-circle loading'></button></span>
    }
    
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{from: location}} replace ></Navigate>

};

export default PrivateRouts;