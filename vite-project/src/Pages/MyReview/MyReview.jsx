import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../Router/Context/AuthProvider/AuthProvider';
import Review from '../Review/Rating';

const MyReview = () => {

    const { user } = useContext(AuthContext);

    const [myReviews, SetMyReview] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/reviews/user?email=${user?.email}`)
        .then(res => res.json())
        .then(data => SetMyReview(data))
    }, [])

    return (
        <div>
            <h2 className='text-center text-4xl text-warning my-10'>My Review: <span className='text-white'>{myReviews.length}</span></h2>
            <div className='flex justify-center flex-wrap gap-5 my-10'>
                {
                    myReviews.map( review => <Review 
                        key={review._id}
                        review={review}
                        user={user}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default MyReview;