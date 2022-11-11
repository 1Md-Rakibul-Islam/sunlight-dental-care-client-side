import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Router/Context/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { TabTitle } from "../../TabTitle/TabTitle";
// import  fromImg  from "../../assets/fromInage.jpg";

const Login = () => {
  //Page titel
  TabTitle("Sunlight Dental Care | Login");
  const { logIn, loginProvider, setLoading } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setLoading(false);
      })
      .catch((error) => console.error(error));
    navigate(from, { replace: true });
  };

  // google login
  const googleProvider = new GoogleAuthProvider();
  const handelGoogleLogin = () => {
    loginProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="hero w-full">
      <div className="hero-content my-20 flex-col lg:flex-row">
        {/* <div className="hero-content grid my-20 gap-5 md:grid-cols-2 flex-col lg:flex-row"> */}
        <div className="text-center lg:text-left">{/* <img className="3/4" src={fromImg} alt="" /> */}</div>
        <div className="card glass flex-shrink-0 w-full max-w-sm shadow-2xl">
          <h1 className="text-4xl pt-5 text-center font-bold">Login now!</h1>
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" required placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" required placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <div className=" mt-6 mx-auto">
              <span onClick={handelGoogleLogin} className="btn rounded-full btn-outline btn-success">
                <FaGoogle className="text-4xl"></FaGoogle>
              </span>
            </div>
            <p>
              New to Sunlight Dental Care?{" "}
              <Link className="text-warning" to="/register">
                Register
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
