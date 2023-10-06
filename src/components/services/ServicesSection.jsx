import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import {arr} from "./data"
import services from "../../assets/services.jpg"
import ServiceCard from './serviceCard'
function ServicesSection() {
  return (
    <div className='services'>
        {/* description */}
        <h2>High <span>quality </span>Service</h2>
        <div className='services-items'>
             {
                arr.map(item=>(
                    <ServiceCard Icon={item.Icon} title={item.title} desc={item.desc} key={uuidv4()} />
                ))
             }
        </div>
        <div className='image'>
             <img src={services} alt='services' />
        </div>
    </div>
  )
}

export default ServicesSection