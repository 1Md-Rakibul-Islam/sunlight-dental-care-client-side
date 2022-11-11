import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Register from "../../Pages/Register/Register";
import Service from "../../Pages/Service/Service";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import PrivateRouts from "./PrivateRouts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Service></Service>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services/:_id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params._id}`),
      },
      {
        path: "/myReview",
        element: (
          <PrivateRouts>
            <MyReview></MyReview>
          </PrivateRouts>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRouts>
            <AddService></AddService>
          </PrivateRouts>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: (
          <div>
            <h2 className="text-center text-9xl my-52 text-warning">
              404
              <span>
                <br />
                <h4 className="text-center text-white text-3xl">Opps! This page is not found</h4>
              </span>
            </h2>
          </div>
        ),
      },
    ],
  },
]);

export default router;
