import React from 'react';
import './AboutUs.css';
import NavBar from "../../components/NavBar/NavBar.jsx";
import aboutUs from '../../Assets/gallery6.jpeg';
import Alexa from '../../Assets/alexa1.jpeg'


const AboutUs = () => {
  return (
    <div>
      <NavBar />
    <div className='aboutWrapper'>
      
      <div className='aboutUp'>
        <img src={aboutUs} alt="About Us" />
        {/* <h4>Alexa Physiotherapy and Rehabilitation Clinic</h4>
        <h2>We Restore, Maintain, and Enhance Our Patients' Mobility, Function, and Well-being</h2> */}
      </div>
      <div className='cards'>
        <h2>Our Mission</h2>
        <p>At ALEXA Physiotherapy and Rehabilitation Center, our mission is to empower every individual to achieve optimal functionality and well-being. Since 2017, we have been providing exceptional treatment in Akure and Lagos. Our team of highly qualified consultants and physiotherapists, licensed by the Medical Rehabilitation Therapists Board (MRTB), is dedicated to delivering top-notch, compassionate care within a nurturing and healing environment. We create personalized treatment plans to address each patient’s unique needs, promoting recovery, rehabilitation, and a return to a healthy, active lifestyle. Utilizing state-of-the-art facilities and innovative therapeutic techniques, we strive to meet the diverse needs of our community, ensuring comprehensive and effective care for all.</p>
      </div>

      <div class="alexaCEO">
  <div class="imageContainer">
    <div class="imageBackground">
      <img src={Alexa} alt="" />
      <div className='ceo'>
      <p>Dr. Bamidele Samuel Alade</p>
      <span>CEO Alexa Physiotherapy and Rehabilitation Clinic</span>
      </div>
      
    </div>
  </div>
  <div class="textContainer">
    
    
    <p>Dr. Bamidele Samuel Alade is an accomplished senior physiotherapist renowned for his extensive expertise and wealth of experience in the field. With a career spanning various regions of Nigeria and beyond, he has garnered invaluable insights and skills, particularly during his tenure in the UK. Drawing from this wealth of experience, PT Bamidele Samuel Alade founded Alexa Physio Rehab with a vision to establish a premier center for physiotherapy and rehabilitation services. His seasoned expertise and dedication to excellence serve as the foundation of Alexa Physio Rehab, ensuring that patients receive the highest standard of care. Through his leadership and commitment to advancing physiotherapy practices, PT Bamidele Samuel Alade continues to positively impact the lives of individuals seeking rehabilitation and improved well-being.</p>
  </div>
</div>

       
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
