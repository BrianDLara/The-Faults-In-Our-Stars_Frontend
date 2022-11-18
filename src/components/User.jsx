import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const User = ({id, firstName, lastName, zodiacName, profilePic}) => {

  const getRandomAge = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    window.localStorage.setItem('Hide_Users_From_View', JSON.stringify(isShown))
  }, [isShown])
  
  useEffect(() => {
    const data = window.localStorage.getItem('Hide_Users_From_View');
    if (data !== null) 
      setIsShown(JSON.parse(data))
    
  },[])
  return isShown ? (
    <div className='users-card' key={id}>
     <div className="image-wrapper"> 
      <img src={profilePic} alt={`of ${firstName} ${lastName}`}  id="user-profilePic" /> 
      </div>
        <div className='users-info'> 
          <div className='user-txt-container'> 
            <h2 id="user-name">{firstName} &nbsp; <p className='user-age'>{getRandomAge(18,40)}</p></h2>
            <span id="zodiacSign"> <img src="https://i.imgur.com/TkMTiQu.png" alt="astrology icon" width="22rem"/>&nbsp; <h3>{zodiacName}</h3></span>
          </div>
          <div className='icons-container'> 
            <Link to={`/`}>
          
            <div className='icon-card' onClick={() => setIsShown(!isShown)}> 
              <img src={`https://i.imgur.com/soJ17a8.png`} alt={`red circle`} width="60px" className='circle-icon'/> 
              <img src={`https://i.imgur.com/aOo2Bcv.png`} alt={`x`} width="30px" className='option-icon'/> 
            </div>
           
            </Link>
            <Link to={`/`}>
            <div className='icon-card' onClick={() => setIsShown(!isShown)}> 
              <img src={`https://i.imgur.com/tk8nt81.png`} alt={`green circle`} width="60px" className='circle-icon'/> 
              <img src={`https://i.imgur.com/0z8S6Uu.png`} alt={`heart`} width="30px" className='option-icon'/> 
            </div>
            </Link>
          </div>
        </div>
    </div>
  ) : null
}

export default User
