import "./styles.css"
import {motion} from "framer-motion"
function Faq() {
  return (
    <motion.div initial={{
        opacity:0,
        x:"-100%"
    }} whileInView={{
        opacity:1,
        x:0
    }} transition={{
        duration:1
    }} viewport={{
        once:"true",
        margin:"-100px"
    }} className='faq'>
        <h2>Any Questions<span> FAQ</span></h2>
        <motion.div whileHover={{
            height:"auto"
        }} transition={{
            duration:1
        }} className='question'>
            <h4>How Do I Start</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras</p>
        </motion.div>
        <motion.div whileHover={{
            height:"auto"
        }} transition={{
            duration:1
        }} className='question'>
            <h4>Daily scheduels</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras</p>
        </motion.div>
        <motion.div whileHover={{
            height:"auto"
        }} transition={{
            duration:1
        }} className='question'>
            <h4>Different payements</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras</p>
        </motion.div>
        <motion.div whileHover={{
            height:"auto"
        }} transition={{
            duration:1
        }} className='question'>
            <h4>What Products you offer</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras</p>
        </motion.div>
    </motion.div>
  )
}  

export default Faq