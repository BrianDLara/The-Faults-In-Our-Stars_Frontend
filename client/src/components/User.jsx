import React from 'react'

const User = ({id, firstName, lastName, zodiacName, profilePic}) => {
  return (
    <div className='user-container' key={id}>
      <img src={profilePic} alt={`of ${firstName} ${lastName}`}  id="user-profilePic"/>
      {/* <span className='user-txt-container'>  */}
      <h2 id="user-name">{firstName} {lastName}&nbsp;</h2>
      <h2 id="zodiacSign">{zodiacName}</h2>
      {/* </span> */}
   
    </div>
  )
}

export default User
