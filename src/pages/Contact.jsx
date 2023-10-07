//Animation 
import { pageAnimation } from './animations'
import { motion } from 'framer-motion'
function Contact() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">Contact</motion.div>
  )
}

export default Contact