import { NavLink, Link} from 'react-router-dom'
import React from 'react'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <NavLink to = '/' className="nav-link"> <img src="/images/home-icon.png" alt="home icon" width="20rem"/> Home </NavLink>
        <NavLink onClick={handleLogOut} to="/" className="nav-link">Sign Out</NavLink>
        <NavLink to = '/zodiacs' className="nav-link"> <img src="/images/astrology-icon.png" alt="astrology icon" width="22rem"/> Zodiac Signs </NavLink>
        <NavLink to = '/profile' className="nav-link"> <img src="/images/profile-icon.png" alt="profile icon" width="20rem"/> Profile </NavLink>
        <NavLink to = '/about_us' className="nav-link"> About Us </NavLink>
      </nav>
    )
  }
 
  const publicOptions = (
    <nav>
      <NavLink to = '/login' className="nav-link"> Login </NavLink>
    </nav>
  )
 
 
  return(  
    <header className = "nav-container">
      {/* Marquee banner */}
      <span id='nav-banner'>
        <marquee> 
          <h4 id='nav-banner-text'>The stars are about to line. Learn about your zodiac sign NOW!!!</h4>
        </marquee>
      </span>
        {/* Header */}
        <div id='nav-content'>  
          <Link to ={`/`}><img src="https://i.imgur.com/7O8c7S6.png" alt="website logo" className='logo'/></Link>
          <div id='links-container'>
            {authenticated && user ? authenticatedOptions : publicOptions}
          </div>
        </div>
    </header>
  )
}

export default Nav
