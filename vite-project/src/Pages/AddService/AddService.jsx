import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Router/Context/AuthProvider/AuthProvider";
import { TabTitle } from "../../TabTitle/TabTitle";
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {
  //Page titel
  TabTitle("Sunlight Dental Care | Add Service");

  const { creatUser, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const about = form.about.value;

    //service data
    const service = {
      serviceName: name,
      price,
      image: photo,
      about,
      rating,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          toast.success("Service Successfully added")
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="">
      <div className="hero-content my-20 mx-auto">
        <div className="card glass w-full max-w-5xl shadow-2xl bg-base-100">
          <h1 className="text-4xl py-3 text-center font-bold">Add Service</h1>
          <form onSubmit={handelAddService} className="card-body">
            <div className=" grid gap-3 grid-cols-1 md:grid-cols-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input type="text" name="name" required placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photoURL" required placeholder="photo url" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="number" name="price" required placeholder="Price" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="number" name="rating" required placeholder="Rating" className="input input-bordered" />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Decription</span>
              </label>
              <textarea name="about" className="textarea textarea-primary w-full h-24" placeholder="Write a decription the service!!!"></textarea>
            </div>
            <div className="form-control mt-6 mx-auto">
              <button className="btn btn-primary ">Add Service</button>
              <Toaster></Toaster>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
