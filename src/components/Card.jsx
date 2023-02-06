import React from 'react'
import '../hojas-de-estilo/card.css'

const Card = (props) => {
  return (
    <div className={props.className}>
      <img className='country-image' src={props.image} alt={props.alt} />
      <div className='data-container'>
        <h2 className='country-title'>{props.name}</h2>
        <p>Population: <span>{props.population}</span></p>
        <p>Region: <span>{props.region}</span></p>
        <p>Capital: <span>{props.capital}</span></p>
      </div>
    </div>
  )
}

export default Card