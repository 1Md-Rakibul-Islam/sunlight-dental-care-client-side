import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Team = () => {
  return (
    <div className="mx-auto">
      <h2 className="text-center text-4xl text-warning my-20 ">My Team</h2>
      <div className="grid mx-10 my-32 gap-4 grid-cols-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="card bg-base-100 shadow-xl">
          <figure className="border-spacing-1 px-10 pt-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVEOVX8Ij_g-DV4sQVdnP8Vvn4sfpcJql6Ww&usqp"
              alt="Shoes"
              className="rounded"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Dr. Rakibul Islam!</h2>
            <p>Dental Doctor</p>
            <div className="card-actions">
              <button className="btn btn-circle btn-info text-2xl">
                <FaFacebook></FaFacebook>
              </button>
              <button className="btn btn-circle btn-info text-2xl">
                <FaTwitter></FaTwitter>
              </button>
              <button className="btn btn-circle btn-info text-2xl">
                <FaWhatsapp></FaWhatsapp>
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmkQXVFvApGT65x-owkshuFDUFouTOmQNFxg&usqp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Dr. Sohig!</h2>
            <p>Screen Doctor</p>
            <div className="card-actions">
              <button className="btn btn-circle btn-info text-2xl">
                <FaFacebook></FaFacebook>
              </button>
              <button className="btn btn-circle btn-info text-2xl">
                <FaTwitter></FaTwitter>
              </button>
              <button className="btn btn-circle btn-info text-2xl">
                <FaWhatsapp></FaWhatsapp>
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRynpQka3hFm19L3FhG2N43uF_0kjsDuqqNzg&usqp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Rasel Islam!</h2>
            <p>Dental Doctor</p>
            <div className="card-actions">
              <button className="btn btn-circle btn-info text-2xl">
                <FaFacebook></FaFacebook>
              </button>
              <button className="btn btn-circle btn-info text-2xl">
                <FaTwitter></FaTwitter>
              </button>
              <button className="btn btn-circle btn-info text-2xl">
                <FaWhatsapp></FaWhatsapp>
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80&fbclid=IwAR3Esl7fxXQTjf1awj7riy6izLY1JwEG5eMPvHHrEUUBCXh4DqXT2C_zafU"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Dr. MD Jibon!</h2>
            <p>Mental Doctor</p>
            <div className="card-actions">
              <button className="btn btn-circle btn-info text-2xl">
                <FaFacebook></FaFacebook>
              </button>
              <button className="btn btn-circle btn-info text-2xl">
                <FaTwitter></FaTwitter>
              </button>
              <button className="btn btn-circle btn-info text-2xl">
                <FaWhatsapp></FaWhatsapp>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
