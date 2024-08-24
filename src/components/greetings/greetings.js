import React from 'react'
import './greetings.css'
import pdf from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/Kamakshi_Gupta.pdf'
var t = new Date().getHours();
var year = new Date().getFullYear();
var greeting;
if(t<12){
    greeting = "Good Morning";
}
else if(t<17){
    greeting = "Good Afternoon";
}
else{
    greeting = "Good Evening";
}
export default function Greetings() {
  return (
    <div className='greetings_section'>
        <div className='signature'>KG</div>
        <div className='intro'>Eager to learn, <br></br> Ready to Contribute</div>
        <p className='intropara'>
            {greeting}! <br></br>
            Welcome to my Portfolio Website.
        </p>
        <p className='resumeLink'><a href={pdf} target='blank'>Click here to view my resume</a></p>
        <p className='footer'>Portfolio {year} &copy; </p>
    </div>

  )
}
