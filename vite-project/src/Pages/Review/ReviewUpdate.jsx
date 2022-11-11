import React from 'react';
import { useLoaderData } from "react-router-dom";

const ReviewUpdate = () => {
    // https://sunlight-dental-care-1md-rakibul-islam.vercel.app

    const loader = useLoaderData();
    console.log(loader);

    return (
        <div>
            <h2 className='text-center text-4px text-warning my-5'>Review Update</h2>
        </div>
    );
};

export default ReviewUpdate;