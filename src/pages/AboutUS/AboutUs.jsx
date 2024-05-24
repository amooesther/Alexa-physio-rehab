import React from 'react';
import './AboutUs.css';
import NavBar from "../../components/NavBar/NavBar.jsx";
import aboutUs from '../../Assets/aboutUs.jpg';
import UserAvatar from ''

const AboutUs = () => {
  return (
    <div className='aboutWrapper'>
      <NavBar />
      <div className='aboutUp'>
        <img src={aboutUs} alt="About Us" />
        <h4>Alexa Physiotherapy and Rehabilitation Clinic</h4>
        <h2>We Restore, Maintain, and Enhance Our Patients' Mobility, Function, and Well-being</h2>
      </div>
      <div className='card'>
        <p>ALEXA Physiotherapy and Rehabilitation Center is a distinguished, privately-owned physical therapy facility that has been providing exceptional treatment in both Akure and Lagos since 2017. Our clinic’s foremost objective is to empower every individual, particularly our esteemed clients and patients, to achieve optimal functionality and well-being.

At ALEXA, we are proud to have a team of highly qualified consultants and physiotherapists who possess the Medical Rehabilitation Therapists Board (MRTB) licenses, ensuring the highest standard of professional care. Our dedicated professionals are deeply passionate about delivering top-notch, compassionate care within a nurturing and healing environment. We strive to create personalized treatment plans that address the unique needs of each patient, promoting recovery, rehabilitation, and a return to a healthy, active lifestyle.

Our state-of-the-art facilities and innovative therapeutic techniques are designed to support the diverse needs of our community, ensuring that each patient receives comprehensive and effective care. Whether you are recovering from an injury, managing a chronic condition, or seeking to enhance your physical performance, ALEXA Physiotherapy and Rehabilitation Center is committed to helping you achieve your health and wellness goals.</p>
      </div>

      <div>
        <h2>Meet The Team</h2>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
