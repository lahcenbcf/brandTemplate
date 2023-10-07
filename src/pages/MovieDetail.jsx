import {useLocation} from "react-router-dom"
import { moviesState } from "./state/movieState"
import { useEffect, useState } from "react"
//Animation 
import { pageAnimation } from './animations'
import { motion } from 'framer-motion'
import {v4 as uuidv4} from "uuid"
function WorkDetail() {
    const {pathname}=useLocation()
    const [workItem,setWorkItem]=useState(null)
    useEffect(()=>{
        setWorkItem(...moviesState().filter(m=>m.url === pathname))
    },[])
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" className="workDetails">
        <h2>
            {workItem?.title}
        </h2>
        <img src={workItem?.mainImg} alt={workItem?.title} />
        <div className="awards">
            {
                workItem?.awards.map(award=>(
 <Award title={award.title} desc={award.description} />
                ))
            }
        </div>
        <div className="secondImg">
            <img src={workItem?.secondImg} alt={workItem?.title} />
        </div>
    </motion.div>
  )
}

const Award=({title="",desc=""})=>{
    return <div className="award">
        <h3>{title}</h3>
        <div className="line">
        </div>
    <p>{
        desc
    }</p>
    </div>
}

export default WorkDetail