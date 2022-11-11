import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Router/Context/AuthProvider/AuthProvider";
import Rating from "./Rating";

const Review = ({ _id }) => {
  // load service based rivews
  const { setLoading } = useContext(AuthContext);
  const [reviews, setReviews] = useState({});

  // console.log(reviews);

  const handelOnDelete = (id) => {
    const permation = window.confirm("Are you sure to Delete? Yes/No");

    if (permation) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            const remaining = reviews.filter((revw) => revw._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/reviews?service=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.reverse()));
    setLoading(false);
  }, [_id]);

  return (
    <div>
      <h2 className="text-warning text-center my-10 text-4xl">Reviews: {reviews.length}</h2>
      <div className="flex justify-center flex-wrap gap-5">
        {reviews.length > 0
          ? reviews.map((review) => <Rating key={review._id} review={review} handelOnDelete={handelOnDelete}></Rating>)
          : "No Reviews in this service"
        }
      </div>
    </div>
  );
};

export default Review;
