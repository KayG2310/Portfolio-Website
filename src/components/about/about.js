import React from 'react'
import './about.css'
import photu from "/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/profilePhoto.jpeg";
export default function About() {
    return (
        <div className='aboutpage'>
            <div className='photoAndHeading'>
                <div>
                    <img src={photu} className='picture'></img>
                </div>

                <div className='aboutmeText'>
                    <p>A</p>
                    <p>B</p>
                    <p>O</p>
                    <p>U</p>
                    <p>T</p>
                    <br></br>
                    <p>M</p>
                    <p>E</p>
                </div>
            </div>

            <div className='description'>
                <h1 className='name'>Kamakshi Gupta</h1>
                <p>
                    I'm a budding software developer currently pursuing a Bachelor of Technology in Artificial Intelligence and Data Engineering at the Indian Institute of Technology, Ropar. 
                    With a strong foundation in C++, Python, and web technologies like HTML and CSS, I am passionate about leveraging my skills to solve real-world problems. 
                    My journey in the world of technology has just begun, and I am eager to learn, explore, and contribute to impactful projects.
                </p>
            </div>
        </div>

    )
}
