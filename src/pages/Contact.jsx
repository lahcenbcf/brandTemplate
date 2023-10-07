//Animation 
import { pageAnimation , titleAnimations } from './animations'
import { motion } from 'framer-motion'
function Contact() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" className='contact'>
        <h1>Our Contact</h1>
        <motion.h2 variants={titleAnimations}>Get in touch</motion.h2>
        <div className='link'>
              <div className='circle'></div>
              <motion.h4 variants={titleAnimations} >send us a message</motion.h4>
        </div>
        <div className='link'>
              <div className='circle'></div>
              <motion.h4 variants={titleAnimations} >call us</motion.h4>
        </div>
        <div className='link'>
              <div className='circle'></div>
              <motion.h4 variants={titleAnimations} >visit our company</motion.h4>
        </div>
    </motion.div>
  )
}

export default Contact