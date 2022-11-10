import React from "react";

const Review = ({ review }) => {
  const { service, serviceName, userName, email, userImage, image, price, about, rating } = review;

  console.log(review);

  return (
    <div className="card w-96 h-auto bg-base-100 shadow-xl image-full">
      <figure>
        <img src={image} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{userName}</h2>
        <span className="">
          <small>{email}</small>
        </span>
        <p>{about}</p>
        <div className="card-actions justify-end">
          <div className="flex flex-col items-center">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={userImage} alt="img" />
              </div>
            </div>
            <div className="badge badge-warning">
              Rating: {rating}
              <input type="radio" name="rating-1" className="mask mask-star" checked />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
