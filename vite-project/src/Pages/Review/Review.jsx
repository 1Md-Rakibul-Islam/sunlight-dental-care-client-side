import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Router/Context/AuthProvider/AuthProvider";
import Rating from "./Rating";

const Review = ({_id}) => {
    // load service based rivews
    const { setLoading } = useContext(AuthContext);
    const [reviews, setReviews] = useState({});

    useEffect(() => {
      setLoading(true)
      fetch(`http://localhost:5000/reviews?service=${_id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
      setLoading(false)
    }, [_id])
    
  return (
    <div className="flex justify-center flex-wrap gap-5">
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"> */}
      { 
          reviews.length > 0 ?
          reviews.map( review => <Rating 
            key={review._id}
            review={review}
            ></Rating>)
          : 'No Reviews in this service'
      }
    </div>
  );
};

export default Review;
