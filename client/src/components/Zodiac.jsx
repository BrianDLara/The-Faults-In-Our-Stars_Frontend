import React from 'react'

const Zodiac = ({key, zodiacName, image, description }) => {
  return (
    <div className='zodiac-container' key={key}>
      <img src={image} alt={`of ${zodiacName}`}  id="zodiac-pic"/> 
      <h2 id="zodiac-name">{zodiacName}</h2> 
    </div>
  )
}

export default Zodiac