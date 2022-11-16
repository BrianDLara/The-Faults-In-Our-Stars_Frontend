import React from 'react'

const User = ({id, firstName, lastName, zodiacName, profilePic}) => {
  return (
    <div className='users-card' key={id}>
      <img src={profilePic} alt={`of ${firstName} ${lastName}`}  id="user-profilePic" /> 
        <div className='users-info'> 
          <div className='user-txt-container'> 
            <h2 id="user-name">{firstName} &nbsp; <p>34</p></h2>
            <span id="zodiacSign"> <img src="/images/astrology-icon.png" alt="astrology icon" width="22rem"/>&nbsp; <h3>{zodiacName}</h3></span>
          </div>
          <div className='icons-container'> 
            <div className='icon-card'> 
              <img src={`https://i.imgur.com/soJ17a8.png`} alt={`red circle`} width="60px" className='circle-icon'/> 
              <img src={`https://i.imgur.com/0QsuLtG.jpg`} alt={`x`} width="30px" className='option-icon'/> 
            </div>
            <div className='icon-card'> 
              <img src={`https://i.imgur.com/tk8nt81.png`} alt={`green circle`} width="60px" className='circle-icon'/> 
              <img src={`https://i.imgur.com/0z8S6Uu.png`} alt={`heart`} width="30px" className='option-icon'/> 
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default User
