import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Router/Context/AuthProvider/AuthProvider";

const Rating = ({ review, handelOnDelete, handelOnEdit }) => {
  const {  _id, serviceName, userName, email, userImage, image, price, about, comment, rating } = review;

  const {user} = useContext(AuthContext);
  const currentUser = user;


  return (
    <div className="card w-96 h-auto bg-base-100 shadow-xl image-full">
      <figure>
        <img src={image} alt="Service image not found" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
            <div className="mask mask-squircle flex justify-center justify-items-center items-center w-12 h-12">
               {
                userImage ?
                    <img src={userImage} alt="unable" /> :
                    <FaUserCircle className="text-4xl"></FaUserCircle>
                }
            </div>
          <div className="badge badge-warning">
            Rating: {rating}
            <input type="radio" name="rating-1" className="mask mask-star" checked />
          </div>
        </div>
        <h2 className="card-title text-white">Name: {userName ? userName : "Not Available"}</h2>
        <span className="">
          <small>{email}</small>
        </span>
        <h2 className="text-3xl text-secondary">{serviceName}</h2>
        <p>{comment}</p>

        {
            currentUser?.email === email? 
            <div className="card-actions justify-end">
                <Link to={`/review/update/${_id}`}>
                  <button className="btn btn-success mr-2" type="submit">
                      Edit
                  </button>
                </Link>
                <button onClick={() => handelOnDelete(_id)} className="btn btn-error " type="submit">
                    Delete
                </button>
            </div>
            :
            <></>            
        }

      </div>
    </div>
  );
};

export default Rating;
