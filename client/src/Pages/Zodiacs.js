import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Zodiac from '../components/Zodiac'

const Zodiacs = () => {
  const [zodiacs, setZodiacs] = useState([])

  useEffect(() => {
    const getZodiacs = async () => {
      const response = await axios.get(
        `https://the-faults-in-our-stars.herokuapp.com/api/zodiacs`
      )
      setZodiacs(response.data)
    }
    getZodiacs()
  }, [])

  return (
    <div id="ZodiacDetails">
      <h1>Zodiac Signs</h1>
      {zodiacs.map((zodiac) => (
        <Link to={`/zodiacs/details/${zodiac.id}`}>
          <Zodiac
            key={zodiac.id}
            id={zodiac.id}
            zodiacName={zodiac.name}
            image={zodiac.image}
            description={zodiac.description}
          />
        </Link>
      ))}
    </div>
  )
}

export default Zodiacs
