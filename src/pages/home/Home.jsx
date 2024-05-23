import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero.jsx'
import Landing from '../../components/landing/Landing.jsx'
import Testimonial from '../../components/Testimonials/Testimonial.jsx'
import Service from '../../components/services/index.jsx'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Service/>
        <Landing/>
        <Testimonial/>

    </div>
  )
}

export default Home