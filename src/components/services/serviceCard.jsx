import {fadeAnim} from "../../pages/animations"
import { motion } from "framer-motion"
function ServiceCard({Icon,title="",desc=""}) {
  return (
    <motion.div initial={{opacity:0}} whileInView={{
      opacity:1
    }} transition={{duration:1}} viewport={{
      margin:"-200px"
    }} className='card'>
        <div className='icon'>
                <Icon size={30} color="23d998" />
                <h3>{title}</h3>
        </div>
        <p>{desc}</p>
    </motion.div>
  )
}

export default ServiceCard