import React from 'react'

const Zodiac = ({id, zodiacName, image, description }) => {
  return (
    <div className='zodiac-container' key={id}>
      <img src={image} alt={`of ${zodiacName}`}  id="zodiac-pic"/> 
      <h2 id="zodiac-name">{zodiacName}</h2> 
    </div>
  )
}

export default Zodiac