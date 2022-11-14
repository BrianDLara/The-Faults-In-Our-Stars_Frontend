import { NavLink, Link} from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return(  
    <div className = "nav-container">
      
      <span id='nav-banner'>
        <marquee> 
          <h4 id='nav-banner-text'>The stars are about to line. Learn about your zodiac sign NOW!!!</h4>
        </marquee>
      </span>
        
        <div id='nav-content'>  
          <Link to ={`/`}><img src="https://i.imgur.com/7O8c7S6.png" alt="website logo" className='logo'/></Link>
          <div id='links-container'>
              <NavLink to = '/' className="nav-link"> <img src="/images/home-icon.png" alt="home icon" width="20rem"/> Home </NavLink>
              <NavLink to = '/login' className="nav-link"> Login </NavLink>
              <NavLink to = '/zodiacs' className="nav-link"> <img src="/images/astrology-icon.png" alt="astrology icon" width="22rem"/> Zodiac Signs </NavLink>
              <NavLink to = '/profile' className="nav-link"> <img src="/images/profile-icon.png" alt="profile icon" width="20rem"/> Profile </NavLink>
              <NavLink to = '/about_us' className="nav-link"> About Us </NavLink>
          </div>
        </div>
    
    </div>
  )
}

export default Nav