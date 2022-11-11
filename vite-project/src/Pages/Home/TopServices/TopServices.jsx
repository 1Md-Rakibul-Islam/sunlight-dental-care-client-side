import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicesCard from "../../Shared/ServicesCard/ServicesCard";


const TopServices = () => {
  // load services form mongodb
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/topservice")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mx-auto">
      <h2 className="text-center text-white text-4xl">Services</h2>
      <div className="grid justify-items-center gap-3 mt-20 mb-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          services.map(service => <ServicesCard
             key={service._id} 
             service={service}
            ></ServicesCard>)
        }
      </div>
      <div className="flex justify-center">
        <Link to={"/services"}>
          <button className="btn btn-secondary">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default TopServices;
