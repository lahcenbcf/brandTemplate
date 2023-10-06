import React from 'react'
import brandIdea from "../../assets/brandIdea.jpg"
import "./styles.css"
function About() {
  return (
    <div className='about'>
        {/*-
        Content
    -*/}
        <div className='content'>
            <h2>We work to make</h2>
            <h2>your <span>dreams </span></h2>
            <h2>come true</h2>

            <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
            <button className='learnMore'>learn more</button>
        </div>

        {/*-
        image
    -*/}
        <div className='image'>
        <img src={brandIdea} alt='brandIdea' />
        </div>
        

    </div>
  )
}

export default About