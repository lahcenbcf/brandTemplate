import React from 'react'
import { motion } from 'framer-motion'
function Wave() {
  return (
    <div style={{
        position:'absolute',
        left:"0px",
        zIndex:1
    }}>
    <svg width="1338" height="386" viewBox="0 0 1338 386" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path initial={{
    pathLength:0,
    pathOffset:1
}} animate={{pathLength:1,pathOffset:0}} transition={{duration:1,delay:1}} d="M2 63C148.4 303.8 229 379 370 384C511 389 694 234 749 183C804 132 834 92 861 69C888 46 903 32 925 19C947 5.99998 1000 -15 1046 27C1092 69 1114 106 1122 113C1130 120 1166 220 1177 237C1188 254 1247.7 294.9 1293 332L1337 340" stroke="#f5c7f7" stroke-width="3"/>
</svg>    
    </div>
  )
}

export default Wave  