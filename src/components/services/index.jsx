import React from 'react'
import './service.css'
import alexa3 from '../../Assets/alexa3.jpg'

const Service = () => {
  return (
    <div className='serviceWrapper'>
        <h2>Our Services</h2>
     <div className='serviceCard'>
     <div className='card'>
    <h3>Rehabilitation</h3>
    <p>We help our patients Treat basic diseases and prevent complications, Treat disability and improve functions, Provide adaptive tools, Teach the patient and family to adapt to lifestyle changes.</p>

    <img src={alexa3} alt="" />

</div>
<div className='card'>
    
    <h3>Sport Injury</h3>
    <p>We also help to treat sports injuries. Bruises, strains, sprains, tears, and broken bones.</p>

    <img src={alexa3} alt="" />

</div>



<div className='card'>
    <h3>Rehabilitation</h3>
    <p>We help our patients with human function and movement and maximising physical potential. In General, We Treat neuromuscular (brain and nervous system), musculoskeletal (soft tissues, joints and bones), cardiovascular and respiratory systems (heart and lungs and associated physiology)</p>

    <img src={alexa3} alt="" />

</div>

<div className='card'>
    <h3>Massage Therapy</h3>
    <p>We carry out Massage therapy to relax muscle tissue, which reduces painful contractions and spasms. Massage can also reduce nerve compression.</p>

    <img src={alexa3} alt="" />

</div>

<div className='card'>
    <h3>Rehabilitation</h3>
    <p>We help our patients Treat basic diseases and prevent complications, Treat disability and improve functions, Provide adaptive tools, Teach the patient and family to adapt to lifestyle changes.</p>

    <img src={alexa3} alt="" />

</div>
<div className='card'>
    <h3>Rehabilitation</h3>
    <p>We help our patients Treat basic diseases and prevent complications, Treat disability and improve functions, Provide adaptive tools, Teach the patient and family to adapt to lifestyle changes.</p>

    <img src={alexa3} alt="" />

</div>
</div>   


    </div>
  )
}

export default Service;