import React from 'react'
import '../hojas-de-estilo/modal.css'
import { FaArrowLeft } from "react-icons/fa";

const Modal = (props) => {
  return (
    <div className= {props.className}>
      <button onClick={props.onClick}> <FaArrowLeft />Back</button>
      <div className='modal-content'>
        <img src={props.img} alt={props.alt} />
        <div className='info-content'>
          <h2>{props.name}</h2>
          <div className='data-content'>
            <div className='data1'>
              <p>Native Name: <span>{props.nativeName}</span></p>
              <p>Population: <span>{props.population}</span></p>
              <p>Region: <span>{props.region}</span></p>
              <p>Sub Region: <span>{props.subRegion}</span></p>
              <p>Capital: <span>{props.capital}</span></p>
            </div>
            <div className='data2'>
              <p>Top Level Domain: <span>{props.topLevelDomain}</span></p>
              <p>Continents: <span>{props.continents}</span></p>
              <p>Area: <span>{props.area}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal