import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ZodiacDetails = () => {
  const { id } = useParams()

  const [zodiac, setZodiac] = useState(' ')

  const getZodiacs = async () => {
    const response = await axios.get(
      `https://the-faults-in-our-stars.herokuapp.com/api/zodiacs/${id}`
    )
    setZodiac(response.data)
  }

  useEffect(() => {
    getZodiacs()
  }, [])

  return zodiac !== null ? (
    <div className="ZodiacDetails" key={zodiac.id} id={zodiac.id}>
      <h2> {zodiac.name} </h2>
      <img src={zodiac.image} alt={zodiac.name} />
      <h3> {zodiac.description} </h3>
    </div>
  ) : null
}

export default ZodiacDetails
