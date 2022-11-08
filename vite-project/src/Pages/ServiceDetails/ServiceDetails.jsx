import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Review from "../Review/Review";

const ServiceDetails = () => {
  const { _id, serviceName, price, image, about, rating } = useLoaderData();

  return (
    <div className="mx-auto">
      <h2>Service Details</h2>
      <div className="hero min-h-screen my-5 bg-base-200">
        <div className="hero-content flex flex-col justify-between items-start lg:flex-row">
          <div className="">
            <div className="card grid md:grid-cols-2 grid-cols-1 lg:card-side bg-base-100 shadow-xxl">
              <figure className="">
                <img className="" src={image} alt="image" />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">
                  {serviceName}
                  <div className="badge badge-warning">
                    Rating: {rating}
                    <input type="radio" name="rating-1" className="mask mask-star" checked />
                  </div>
                </h2>
                <p>{about}</p>
                <div className="flex justify-between items-center">
                  <div className="badge p-2 badge-secondary">
                    <p>Price: {price}</p>
                  </div>
                  <Link to={`/services/${_id}`}>
                    <button className="btn btn-primary ">Checkout</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card shadow-xl">
              <div className="card-body">
                <div className="grid gap-2 md:grid-cols-3 justify-center grid-cols-1">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name="rating" placeholder="reating" className="input input-bordered" />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Comment</span>
                  </label>
                  <textarea className="textarea textarea-primary w-full h-24" placeholder="Sheare your experience!!!"></textarea>
                </div>
                <div className="form-control mt-6 mx-auto">
                  <button className="btn btn-primary ">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-yellow-300 text-center mb-2 text-4xl">Reviews</h2>
      <div className="overflow-x-auto my-4 flex justify-center justify-items-center ">
        <table className="table">
          <tbody className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Review></Review>
            <Review></Review>
            <Review></Review>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceDetails;
