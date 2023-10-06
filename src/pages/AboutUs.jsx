import React from 'react'
import About from '../components/About/About'
import ServicesSection from '../components/services/ServicesSection'
import Faq from '../components/faq/Faq'
import "./styles.css"
function AboutUs() {
  return (
    <div className='AboutUsWrapper'>
        <About />
        <ServicesSection />
        <Faq />
    </div>
  )
}

export default AboutUs