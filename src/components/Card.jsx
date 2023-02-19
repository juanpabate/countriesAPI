import React from 'react'
import '../hojas-de-estilo/card.css'

const Card = (props) => {
  return (
    <div className={props.className} onClick= {props.onClick} id={props.id}>
      <img className='country-image' src={props.image} alt={props.alt} id={props.id}/>
      <div className='data-container' id={props.id}>
        <h2 className='country-title' id={props.id}>{props.name}</h2>
        <p id={props.id}>Population: <span id={props.id}>{props.population}</span></p>
        <p id={props.id}>Region: <span id={props.id}>{props.region}</span></p>
        <p id={props.id}>Capital: <span id={props.id}>{props.capital}</span></p>
      </div>
    </div>
  )
}

export default Card