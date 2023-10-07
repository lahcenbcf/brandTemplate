import { Link } from 'react-router-dom'
//Animation 
import { pageAnimation , fadeAnim , photoAnim ,lineAnimation , frameAnim} from './animations'
import { motion } from 'framer-motion'
import {moviesState} from "./state/movieState"
const OurWork = () => {
   
  return (
    <motion.div className="work" variants={pageAnimation} initial="hidden" animate="show"  exit="exit">
    <motion.div variants={frameAnim} className='frame frame1'></motion.div>
    <motion.div variants={frameAnim} className='frame frame2'></motion.div>
    <motion.div variants={frameAnim} className='frame frame3'></motion.div>
    {
      moviesState().map(work=>(
        <motion.div whileInView={{
          opacity:1
        }} initial={
        {opacity:0}
        } viewport={{
          once:"true",
          margin:"-20px"
        }} className="movie">
          <motion.h2 variants={fadeAnim}>{work.title}</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <motion.img variants={photoAnim} src={work.mainImg} alt={work.title} />
          <Link to={work.url}><button>see more</button></Link>
      </motion.div>
      ))
    }
    </motion.div>
  )
}

export default OurWork 
