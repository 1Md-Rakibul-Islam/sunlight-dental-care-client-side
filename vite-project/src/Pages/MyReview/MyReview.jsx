import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Router/Context/AuthProvider/AuthProvider";
import { TabTitle } from "../../TabTitle/TabTitle";
// import Review from "../Review/Rating";
import Rating from "../Review/Rating";

const MyReview = () => {
  //Page titel
  TabTitle("Sunlight Dental Care | My Review");

  const { user } = useContext(AuthContext);

  const [myReviews, SetMyReview] = useState({});

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
            alert("Deleted successfully");
            const remaining = reviews.filter((revw) => revw._id !== id);
            SetMyReview(remaining);
          }
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/user?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => SetMyReview(data));
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-center text-4xl text-warning my-10">
        My Review: <span className="text-white">{myReviews.length}</span>
      </h2>
      <div className="flex justify-center flex-wrap gap-5 my-10">
        {myReviews.length > 0
          ? myReviews.map((review) => <Rating key={review._id} review={review} handelOnDelete={handelOnDelete}></Rating>)
          : "No Reviews in this service"}
      </div>
    </div>
  );
};

export default MyReview;
