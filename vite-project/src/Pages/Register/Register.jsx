import { getAuth, updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../Router/Context/AuthProvider/AuthProvider";
// import  fromImg  from "../../assets/fromInage.jpg";

const Register = () => {
  const { creatUser, loader } = useContext(AuthContext);
  const navigate = useNavigate();

  //update user profile
  const auth = getAuth(app);

  const handelSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        //update image and name
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(auth.user, profile)
          .then((result) => {})
          .catch((error) => {});
        form.reset();
        navigate("/");
        loader(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero w-full">
      <div className="hero-content my-30 flex-col lg:flex-row">
        {/* <div className="hero-content grid my-20 gap-20 md:grid-cols-2 flex-col lg:flex-row"> */}
        <div className="text-center lg:text-left">{/* <img className="3/4" src={fromImg} alt="" /> */}</div>
        <div className="card glass flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl py-3 text-center font-bold">Register!</h1>
          <form onSubmit={handelSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" required placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" name="photoURL" required placeholder="photo link" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name="email" required placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" required placeholder="password" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Register" />
            </div>
            <p>
              Alredy have an account our site?{" "}
              <Link className="text-warning" to="/login">
                Login
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
