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
              <p className='headings1'>TECHNICAL</p>
              <p className='headings2'>SKILLS</p>
          </div>
          <div className='skills'>
              <div className='codingLanguages'>
                  <p className='codingLangs'>Programming Languages</p>
                  <div className='logos'>
                      <Languages languagelogo={cpp} name='C++'/>
                      <Languages languagelogo={python} name='Python'/>
                      <Languages languagelogo={c} name='C'/>
                      <Languages languagelogo={js} name='Javascript'/>
                  </div>
              </div>
              <div className='webtechs'>
                  <p className='codingLangs'>Web Technologies</p>
                  <div className='logos'>
  
                      <Languages languagelogo={html} name='HTML'/>
                      <Languages languagelogo={css} name='CSS'/>
                      <Languages languagelogo={react} name='ReactJS'/>
                  </div>
              </div>
              <div className='tools'>
                  <p className='codingLangs'>Tools & Libraries</p>
                  <div className='logos'>
  
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
      </div>
    )
  }
  