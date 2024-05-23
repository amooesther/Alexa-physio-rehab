import React from 'react'
import './Landing.css';
import landingOne from '../../Assets/landingOne.png';
import landingTwo from '../../Assets/landingTwo.png';
import landingThree from '../../Assets/landingThree.png';
import doctor from '../../Assets/doctor.png'

const Landing = () => {
  return (
    <div className='landingWrapper'>
<h3>Experience Excellent unmatched Physiotherapy Care <span className='h3Span'>Tailored Just for You!</span></h3>
<div className='landing'>
    <div><img src={landingOne} alt="" /></div>
    <div><img src={landingTwo} alt="" /></div>
    <div><img src={landingThree} alt="" /></div>
</div>
<div className='chooseUs'>
    <div className='choose'>
        <p>Choose the Best, Choose US</p>
        <img src={doctor} alt="" />
    </div>
    <div className='chooseTwo'>
        <p>Why choose US</p>
        <ul>
            <li>Personalized Care: Tailored treatment plans to suit your unique needs and goals.</li>
        <li>Expert Team: Highly skilled physiotherapists dedicated to your well-being and recovery.</li>
        <li>Advanced Techniques: Utilizing cutting-edge methods for effective and efficient rehabilitation.</li>
        <li>Compassionate Approach: Empathetic support throughout your healing journey.</li>
        <li>Proven Results: Trusted by our satisfied patients for delivering successful outcomes.</li>
        </ul>
    </div>
</div>

    </div>
  )
}

export default Landing