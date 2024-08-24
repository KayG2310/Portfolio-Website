import React from 'react'
import './cards.css'
export default function Cards(props) {
  return (
    <div className='card-body'>
        <div className='dabba'>
            <a href={props.link} target='blank'><img src={props.image} className='image'></img></a>
        </div>
        <p className='projectName'>{props.name}</p>
    </div>
    
  )
}
