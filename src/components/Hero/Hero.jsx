import React from "react";
import "./Hero.css";
import heroPicture from "../../Assets/heroPicture.png";

const Hero = () => {
  return (
    <div className="heroWrapper">
      <img src={heroPicture} alt="" />
      <div className="heroLeft">
        <h1>Welcome to Alexa physiotherapy and Rehabilitation clinic,</h1>
        <p>
         
          A conservative way of treatment, guiding you towards optimal health
          and well-being
        </p>
        <button className="heroBtn">Book Appointment</button>
      </div>
    </div>
  );
};

export default Hero;
