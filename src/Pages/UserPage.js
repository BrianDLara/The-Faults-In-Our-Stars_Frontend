import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UserPage = () => {
  const { userId } = useParams()

  const [profile, setProfile] = useState(null)

  const getProfile = async () => {
    const response = await axios.get(
      `https://the-faults-in-our-stars.herokuapp.com/api/users/${userId}`
    )
    setProfile(response.data)
  }
  useEffect(() => {
    getProfile()
  }, [])

  return profile !== null ? (
    <div>
      <h2>
        {profile.firstName}&nbsp;
        {profile.lastName}
      </h2>
      <img src={profile.image} alt={profile.firstName}></img>
      <h3> Description: {profile.description}</h3>
      <h3> Gender: {profile.gender}</h3>
    </div>
  ) : null
}

export default UserPage
