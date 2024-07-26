import React from 'react';
import './service.css';
import Time from '../../Assets/Time.jpg'
import Knowledge from '../../Assets/Knowledge.jpg'
import Environment from '../../Assets/environment.jpg'
import Attention from '../../Assets/attention.jpg'
import physio from '../../Assets/physio.jpg'


const Service = () => {
  return (
   <div className='serviceContainer'>
    <div className='serviceLeft'>
    <div>
    <h2>We are not your usual physiotherapy clinic</h2>
    <p>We are the best at what we do</p>
  </div>
  <div>
    <img src={physio} alt="Alexa" />
  </div>
    </div>

    <div className='serviceRight'>
    <div>
    <img src={Time} alt="Quality Time" />
    <h3>Quality Time</h3>  
    <p>Your physiotherapy session is spent one-on-one with your physiotherapist and not the assistant for maximum comfort and security.</p>
  </div>
  <div>
  <img src={Knowledge} alt="Deep Knowledge" />
    <h3>Professional and Qualified Staffs</h3>   
    <p>Our professional and qualified staff are adept at diagnosing and treating a wide range of musculoskeletal, neurological, and cardiovascular conditions. Our expertise includes advanced therapeutic techniques, pain management, and rehabilitation protocols tailored to individual patient needs.</p>

  </div>
  <div>
  <img src={Environment} alt="Customer Service" />
    <h3>A Well Relaxed Environment</h3>  
    <p>Experience the benefits of a well-relaxed environment designed to enhance your recovery. Our clinic provides a tranquil and comfortable setting, ensuring that your physiotherapy sessions are as calming and effective as possible.</p>

  </div>
  <div>
  <img src={Attention} alt="Personal Attention" />
    <h3>Personal Attention</h3>   
    <p>We aim to exceed your expectations. Our clinical and administrative staff will not rest until we have gone the extra mile to meet all your needs.</p>
  </div>

    </div>
   </div>
  );
}

export default Service;


