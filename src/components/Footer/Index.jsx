import React from 'react'
import logo from '../../Assets/logo2.png'
import location from '../../Assets/location.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footerWrapper'>
<div className='footerOne'>
    <img src={logo} alt="" />
    <p>Alexa Physiotherapy and Rehabilitation Clinic offers a unique experience. We provide personalized care through advanced techniques in a tranquil environment, with highly qualified staff dedicated to your well-being and speedy recovery.</p>

<span>&copy;2024 Alexa physio Rehab </span>

</div>
<div>
    <p>Home</p>
    <p>Appointments</p>
    <p>Contact us</p>
    <p>services</p>
    <p>Products</p>
</div>
<div>
    <p>Address</p>
    <p> <img src={location} alt="" />Akure: No. 3 Ado street, ijapo estate Akure Ondo state</p>
    <p><img src={location} alt="" />Lagos: 44, community road, off Bamishile street, off Allen Avenue, Ikeja Lagos</p>
</div>

    </div>
  )
}

export default Footer

