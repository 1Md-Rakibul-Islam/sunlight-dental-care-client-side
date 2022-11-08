import React, { useContext } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ServiceContext } from '../../Router/Context/ServiceProvider/ServiceProvider';
import ServicesCard from '../Shared/ServicesCard/ServicesCard';

const Service = () => {
    const services = useLoaderData();

    return (
        <div className=''>
            <h2 className='text-center text-white text-4xl'>My all Services</h2>
            <div className='grid justify-items-center gap-3 my-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map( service => <ServicesCard
                        key={service._id}
                        service={service} 
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Service;