import React from 'react'
import './projects.css'
import Cards from './cards/cards'
import ticimage from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/tic.png';
import painter from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/painter.png';
import memory from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/memory.svg';
import sudoku from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/sudoku.png';
import website from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/web.png'

export default function Projects() {
  return (
    <div className='projects'>
        <div className='projectheading'>
        <p className='projectsText'>PROJECTS</p>
        </div>
        <div className='totalcards'>


        <Cards image={ticimage} name="Tic-Tac-Toe" link='https://github.com/KayG2310/Tic-Tac-Toe'/>
        <Cards image={memory} name="Memory Management System" link='https://github.com/KayG2310/Memory-Management-System'/>
        <Cards image={painter} name="OpenCV Hand" link='https://github.com/KayG2310/OpenCV'/>
        <Cards image={sudoku} name="Sudoku Solver" link='https://github.com/KayG2310/Sudoku-Solver'/>
        <Cards image={website} name="Portfolio Website" link='https://github.com/KayG2310/Portfolio-Website'/>
        </div>
    </div>
  )
}

