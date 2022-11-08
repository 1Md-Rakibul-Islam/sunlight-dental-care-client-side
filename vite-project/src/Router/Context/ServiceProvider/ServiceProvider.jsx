import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const ServiceContext = createContext();

const ServiceProvider = ({children}) => {
    // load services form mongodb
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then( res => res.json())
        .then(data => setServices(data))
    }, [])


    const serviceInfo = {
        services
    }

    return (
        <ServiceContext.Provider value={serviceInfo}>
            {children}
        </ServiceContext.Provider>
    );
};

export default ServiceProvider;