import React from "react";

const Apoitment = () => {
  return (
    <div className="hero my-20 bg-base-200">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center">
        <div className="text-center lg:text-left">
          {/* <img className="w-4/5" src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/doctor.png" alt="" /> */}
          <img className="w-full rounded-2xl" src="https://img.freepik.com/free-photo/empty-modern-teethcare-stomatology-hospital-office-with-nobody-it-equipped-with-dental-intruments-ready-orthodontist-healthcare-treatment-tooth-radiography-images-display_482257-9418.jpg" alt="" />
        </div>
        <div className="">
          <h2 className="text-2xl text-secondary">
            <span className="text-4xl text-warning my-5">Sunlight Dental Care</span>
          </h2>
          <p className="my-7">
            Have an emergency? Do book with us with this simple form below and superior deliverables whereas web-enabled applications. Continually
            reintermediate integrated processes through technically sound intellectual capital.
          </p>
          <div className="grid grid-col-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email Address</span>
              </label>
              <input type="text" placeholder="Your Problem" className="input input-bordered" />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Choose your fecality</span>
                <span className="label-text-alt">Choose one!</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
              <label className="label">
                <span className="label-text-alt">Alt label</span>
                <span className="label-text-alt">Alt label</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Appointment date</span>
              </label>
              <input type="text" placeholder="Appointment date" className="input input-bordered" />
            </div>
          </div>
          <div className="my-4">
            <button className="btn btn-primary">Confrom Your Apoitmnet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apoitment;
