import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = ({ user }) => {
  const [profile, setProfile] = useState(null)

  const getProfile = async () => {
    const response = await axios.get(
      `https://the-faults-in-our-stars.herokuapp.com/api/users/${user.id}`
    )
    setProfile(response.data)
  }
  useEffect(() => {
    getProfile()
  }, [])

  return profile !== null ? (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-name">
          {profile.firstName}&nbsp;
          {profile.lastName}
        </h2>
        <img
          className="user-profile-image"
          src={profile.image}
          alt={profile.firstName}
        ></img>
      </div>
      <div className="profile-info">
        <h3 className="profile-item"> Sign: {profile.user_sign.name}</h3>
        <h3 className="profile-item"> Bio: {profile.description}</h3>
        <h3 className="profile-item"> Gender: {profile.gender}</h3>
      </div>
    </div>
  ) : null
}
export default Profile
