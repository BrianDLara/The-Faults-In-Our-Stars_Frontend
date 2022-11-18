import React from 'react'
import { useState, useEffect } from 'react'
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
        <h3 className="profile-item">
          <span className="text-blue">User Name:</span> {profile.username}
        </h3>
        <h3 className="profile-item">
          <span className="text-blue">Sign:</span> {profile.user_sign.name}
        </h3>
        <h3 className="profile-item">
          <span className="text-blue">Bio:</span> {profile.description}
        </h3>
        <h3 className="profile-item">
          <span className="text-blue">Gender:</span> {profile.gender}
        </h3>
        <h3 className="profile-item">
          <span className="text-blue">E-mail:</span> {profile.email}
        </h3>
        <h3 className="profile-item">
          <span className="text-blue">Zodiac:</span> {profile.user_sign.name}
        </h3>
      </div>
    </div>
  ) : null
}
export default Profile
