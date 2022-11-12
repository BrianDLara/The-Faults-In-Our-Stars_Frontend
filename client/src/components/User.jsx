import React from 'react'

const User = ({key, firstName, lastName, zodiacName, profilePic}) => {
  return (
    <div className='user-container' key={key}>
      <img src={profilePic} alt={`of ${firstName} ${lastName}`}  id="user-profilePic"/>
      <h2 id="user-name">{firstName} {lastName}</h2>
      <h2 id="zodiacSign">{zodiacName}</h2>
    </div>
  )
}

export default User
