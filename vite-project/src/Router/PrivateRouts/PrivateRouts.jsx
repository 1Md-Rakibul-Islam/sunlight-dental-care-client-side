import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivateRouts = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='flex justify-center justify-items-center align-middle text-center my-auto mx-auto'><progress className="progress w-56"></progress></div>
    }
    
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{from: location}} replace ></Navigate>

};

export default PrivateRouts;