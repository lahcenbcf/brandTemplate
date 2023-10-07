//framer motion
import {motion  } from "framer-motion"
import { titleAnimations,fadeAnim,photoAnim } from "../../pages/animations"
import brandIdea from "../../assets/brandIdea.jpg"
import "./styles.css" 
function About() {
  /*const titleAnim={
    hidden:{
      opacity:0
    },
    show:{
      opacity:1,transition:{duration:1}
    }
  }
  const containerAnim={
    hidden:{
      x:100,
      opacity:0
    }
    ,show:{
      opacity:1,
      x:0,transition:{
        duration:1,delay:1
      }
    }
  }*/
  return (
    <div className='about'>
        {/*-
        Content
    -*/}
        <div className='content'>
            <motion.h2 variants={titleAnimations}>We work to make</motion.h2>
            <motion.h2 variants={titleAnimations}>your <span>dreams </span></motion.h2>
            <motion.h2 variants={titleAnimations}>come true</motion.h2>

            <motion.p variants={fadeAnim
            }>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</motion.p>
            <motion.button variants={fadeAnim} className='learnMore'>learn more</motion.button>
        </div>

        {/*-
        image
    -*/}
        <motion.div variants={photoAnim} className='image'>
        <img src={brandIdea} alt='brandIdea' />
        </motion.div>
        

    </div>
  )
}

export default About