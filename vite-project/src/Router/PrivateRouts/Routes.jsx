import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import MyReview from '../../Pages/MyReview/MyReview';
import Register from '../../Pages/Register/Register';
import Service from '../../Pages/Service/Service';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Service></Service>,
                loader: () => fetch('http://localhost:5000/services')
            },  
            {
                path: '/services/:_id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params._id}`)
            },
            {
                path: '/myReview',
                element: <MyReview></MyReview>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    }
])

export default router;