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
        <div className="movie">
          <motion.h2 variants={fadeAnim}>{work.title}</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <motion.img variants={photoAnim} src={work.mainImg} alt={work.title} />
          <Link to={work.url}><button>see more</button></Link>
      </div>
      ))
    }
    </motion.div>
  )
}

export default OurWork 
