import React from 'react'
import About from '../components/About/About'
import ServicesSection from '../components/services/ServicesSection'
import Faq from '../components/faq/Faq'
//Animation 
import { pageAnimation } from './animations'
import { motion } from 'framer-motion'
import "./styles.css"
function AboutUs() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" className='AboutUsWrapper'>
        <About />
        <ServicesSection />
        <Faq />
    </motion.div>
  )
}

export default AboutUs