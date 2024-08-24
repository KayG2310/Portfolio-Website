import React from 'react'
import Languages from './languages/languages'
import './technical.css'
import cpp from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/cpp.png'
import python from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/python.png'
import c from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/c.png'
import html from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/html.png'
import css from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/css.png'
import react from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/react.png'
import js from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/js.png'
import vs from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/vs.png'
import git from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/git2.png'
import sql from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/sql.png'
import numpy from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/numpy.png'
import pan from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/pandas.png'
import tf from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/tf.png'
import sk from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/sk.png'
import mat from '/Users/kamakshigupta/Desktop/React/portfolio_website/src/assets/mat.png'
export default function Technical() {
  return (
    <div className='technical_section'>
        <div className='headings'>
            <p className='heading1'>TECHNICAL</p>
            <p className='heading2'>SKILLS</p>
        </div>
        <div className='skills'>
            <div className='codingLanguages'>
                <p className='codingLangs'>Programming Languages</p>
                <Languages languagelogo={cpp} name='C++'/>
                <Languages languagelogo={python} name='Python'/>
                <Languages languagelogo={c} name='C'/>
                <Languages languagelogo={js} name='Javascript'/>
            </div>
            <div className='webtechs'>
                <p className='codingLangs'>Web Technologies</p>
                <Languages languagelogo={html} name='HTML'/>
                <Languages languagelogo={css} name='CSS'/>
                <Languages languagelogo={react} name='ReactJS'/>
            </div>
            <div className='tools'>
                <p className='codingLangs'>Tools & Libraries</p>
                <Languages languagelogo={vs} name='VS Code'/>
                <Languages languagelogo={git} name='Github'/>
                <Languages languagelogo={sql} name='MySQL'/>
                <Languages languagelogo={numpy} name='NumPy'/>
                <Languages languagelogo={pan} name='Pandas'/>
                <Languages languagelogo={tf} name='Tensorflow'/>
                <Languages languagelogo={sk} name='Scikit-Learn'/>
                <Languages languagelogo={mat} name='MatPlotLib'/>
            </div>
        </div>
    </div>
  )
}
