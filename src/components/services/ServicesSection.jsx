import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import {arr} from "./data"
import services from "../../assets/services.jpg"
import ServiceCard from './serviceCard'
import "./services.css"
//animation
import { motion } from 'framer-motion';
import {photoAnim,titleAnimations,fadeAnim} from "../../pages/animations"
function ServicesSection() {
  return (
    <div className='services'>
        {/* description */}
        <div className='content'>
        <motion.h2>High <span>quality </span>Service</motion.h2>
        <div className='cards'>
             {
                arr.map(item=>(
                    <ServiceCard Icon={item.Icon} title={item.title} desc={item.desc} key={uuidv4()} />
                ))
             }
        </div>
        </div>
       
        <div className='image'>
             <motion.img variants={photoAnim} src={services} alt='services' />
        </div>
    </div>
  )
}

export default ServicesSection