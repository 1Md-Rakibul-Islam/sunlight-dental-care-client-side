import React, { useContext } from "react";
import { useLoaderData, Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../../Router/Context/AuthProvider/AuthProvider";
import { TabTitle } from "../../TabTitle/TabTitle";
import toast, { Toaster } from 'react-hot-toast'

const ReviewUpdate = () => {
  // https://sunlight-dental-care-1md-rakibul-islam.vercel.app

  const location = useLocation();

  //Page titel
  TabTitle("Service Details");



  const { _id, service, serviceName, price, image, about, rating, comment } = useLoaderData();
  const { user, setLoading } = useContext(AuthContext);

  const handelOnUpdate = (event) => {
    event.preventDefault();
    // console.log(event.target.comment.value);

    const newComment = event.target.comment.value;

    //send rivew to database
    // /review/update/:_id
    fetch(`https://sunlight-dental-care-1md-rakibul-islam.vercel.app/review/update/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({comment: newComment}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success(
            <div>
              <p>
                'Rating Update Successfully' <br /> Plase Go Back to the service
              </p>
            </div>
          );
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className=" min-h-screen my-5 bg-base-200">
      <h2 className="text-center text-4xl text-warning my-5">Review Update</h2>
      <h1 className="text-center text-3xl text-info my-4">{serviceName}</h1>
      <p className="text-center">You can only change the comment if you want!!!</p>
      <div className="hero-content mx-auto">
        <div className={`card shadow-xl`}>
          <form onSubmit={handelOnUpdate} className="card-body">
            <div className="grid gap-2 md:grid-cols-3 justify-center grid-cols-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" readOnly defaultValue={user?.displayName} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" readOnly required defaultValue={user?.email} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="text" name="rating" placeholder="rating" readOnly required defaultValue={rating} className="input input-bordered" />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Comment</span>
              </label>
              <textarea
                name="comment"
                type="text"
                className="textarea textarea-primary w-full h-24"
                placeholder="Sheare your experience!!!"
                defaultValue={comment}
                required
              ></textarea>
            </div>
            <div className="flex justify-between mt-6 ">
              <Link to={`/services/${service}`} >
                <button className="btn btn-info">Go Back to service</button>
              </Link>
              <button type='submit' name="submit" className="btn btn-primary ">
                Save
              </button>
              <Toaster></Toaster>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewUpdate;
