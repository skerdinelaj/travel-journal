import React from 'react'
import { FaSearchLocation } from 'react-icons/fa'


export default function Card({imageUrl, location, googleMapsUrl, title, startDate, endDate, description}) {
  return (
    <div className='card'>
        <img src={imageUrl} alt="" className='card-img'></img>
        <div>
            <FaSearchLocation />
            <span>{location}</span>
            <a href={googleMapsUrl}>View on Google Maps</a>
            <h3>{title}</h3>
            <span>{startDate} - {endDate}</span>
            <p>{description}</p>
        </div>
    </div>
  )
}
