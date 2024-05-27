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
    <p>At our clinic, we prioritize comprehensive care for our patients by focusing on a multi-faceted approach to health and wellness. We address fundamental health issues by diagnosing and treating basic diseases, ensuring that complications are prevented through proactive care and regular monitoring. For those with disabilities, we provide targeted treatments aimed at improving physical and cognitive functions, thereby enhancing overall quality of life.</p>

    <img src={alexa3} alt="" />

</div>
<div className='card'>
    
    <h3>Community Physiotherapy</h3>
    <p>
We provide Community physiotherapy service treatment and rehabilitation in local settings outside of hospitals, such as in patients' homes, community centers, or clinics. It aims to improve the physical health and mobility of individuals through personalized exercise programs, education, and hands-on therapy. This service is especially beneficial for those with chronic conditions, disabilities, or post-surgical needs who may have difficulty accessing traditional hospital-based care. </p>

    <img src={alexa3} alt="" />

</div>



<div className='card'>
    <h3>Orthopedic Physiotherapy</h3>
    <p>Our orthopedic physiotherapy service diagnoses, manages, and treats musculoskeletal disorders and injuries, including those affecting bones, joints, muscles, ligaments, and tendons. We aim to restore function, reduce pain, and improve mobility using techniques like manual therapy, exercise, and education. We cater to those recovering from surgeries, sports injuries, fractures, or chronic conditions like arthritis, offering personalized treatment and rehabilitation plans.</p>

    <img src={alexa3} alt="" />

</div>

<div className='card'>
    <h3>Neurology Physiotherapy</h3>
    <p>Our neurology physiotherapy service treats neurological conditions like stroke, multiple sclerosis, Parkinson's disease, and spinal cord injuries. We enhance mobility, improve strength, and promote independence through tailored exercises, balance training, and neuro-rehabilitation techniques, helping patients regain abilities, manage symptoms, and adapt to lifestyle changes.</p>

    <img src={alexa3} alt="" />

</div>

<div className='card'>
    <h3>Pediatrics Physiotherapy</h3>
    <p>Our Pediatrics physiotherapy service focuses on assessing and treating children with developmental, neurological, and musculoskeletal conditions. The goal is to improve physical function, enhance motor skills, and support overall development through age-appropriate therapeutic exercises, play-based activities, and family education. This service helps children achieve their maximum potential, promoting independence and improving their quality of life</p>

    <img src={alexa3} alt="" />

</div>
<div className='card'>
    <h3>Geriatric Physiotherapy</h3>
    <p>Our Geriatric physiotherapy service specializes in treating older adults, addressing age-related conditions such as arthritis, osteoporosis, balance disorders, and post-surgical recovery. The goal is to improve mobility, reduce pain, and enhance overall physical function through personalized exercises, manual therapy, and education. This service helps seniors maintain independence, prevent falls, and improve their quality of life.</p>

    <img src={alexa3} alt="" />

</div>

</div>   


    </div>
  )
}

export default Service;