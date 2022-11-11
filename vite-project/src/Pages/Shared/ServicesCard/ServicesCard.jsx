import React from 'react';
import { Link } from 'react-router-dom';

import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


    // <PhotoProvider>
    //   <div className="foo">
    //     {images.map((item, index) => (
    //       <PhotoView key={index} src={item}>
    //         <img src={item} alt="" />
    //       </PhotoView>
    //     ))}
    //   </div>
    // </PhotoProvider>


const ServicesCard = ({service}) => {
    const { _id, serviceName, price, image, about, rating} = service

    return (
        <div className="card lg:w-96 w-80 glass shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView  key={_id} src={image}>
                        <img src={image} alt="Service" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {serviceName}
                    <div className="badge badge-warning">
                        Rating: {rating}
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                    </div>
                </h2>
                <p>
                    {
                        about.length > 50? about.slice(0, 110) + '.....' : about
                    }
                </p>
                <div className="flex justify-between items-center">
                    <div className="badge p-2 badge-secondary">
                        <p>Price: {price}</p>
                    </div> 
                    <Link to={`/services/${_id}`}>
                    <button className="btn btn-primary ">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;