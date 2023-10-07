import { Link } from 'react-router-dom'
//Animation 
import { pageAnimation } from './animations'
import { motion } from 'framer-motion'
import {moviesState} from "./state/movieState"
const OurWork = () => {
   
  return (
    <motion.div className="work" variants={pageAnimation} initial="hidden" animate="show"  exit="exit">
    {
      moviesState().map(work=>(
        <div className="movie">
          <h2>{work.title}</h2>
          <div className="line"></div>
          <img src={work.mainImg} alt={work.title} />
          <Link to={work.url}><button>see more</button></Link>
      </div>
      ))
    }
    </motion.div>
  )
}

export default OurWork 
