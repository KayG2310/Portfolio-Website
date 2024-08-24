import React from 'react'
import './languages.css'
export default function Languages(props) {
  return (
    <div className='langs'>
        <div className='langphoto'>
            <img src={props.languagelogo}></img>
        </div>
        <p className='langname'>{props.name}</p>
    </div>
  )
}
