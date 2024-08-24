import React from 'react'
import './projects.css'
import Cards from './cards/cards'
import ticimage from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/tic.png';
import painter from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/painter.png';
export default function Projects() {
  return (
    <div className='projects'>
        <p className='projectsText'>PROJECTS</p>
        <Cards image={ticimage} name="Tic-Tac-Toe" link='https://github.com/KayG2310/Tic-Tac-Toe'/>
        <Cards image={painter} name="OpenCV Hand" link='https://github.com/KayG2310/OpenCV'/>
    </div>
  )
}
