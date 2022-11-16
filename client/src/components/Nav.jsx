import { NavLink, Link} from 'react-router-dom'
import React from 'react'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <div class="hamburger-menu">
        <input id="menu_toggle" type="checkbox"/>
        <label class="menu_btn" for="menu_toggle">
          <span class="top-bun"></span>
          <span class="meat"></span>
          <span class="bottom-bun"></span>
         
        </label>

      <nav class= "menu_box">
        <NavLink to = '/' className="nav-link">  Home </NavLink>
        <NavLink onClick={handleLogOut} to="/" className="nav-link">Sign Out</NavLink>
        <NavLink to = '/zodiacs' className="nav-link">   Zodiac Signs </NavLink>
        <NavLink to = '/profile' className="nav-link"> Profile </NavLink>
        <NavLink to = '/about_us' className="nav-link"> About Us </NavLink>
      </nav>
      </div>
    )
  }
 
  const publicOptions = (
    <nav>
      <NavLink to = '/login' className="login-link"> Login </NavLink>
    </nav>
  )
 
 
  return(  
    <header className = "nav-container">
      {/* Marquee banner */}
      <span id='nav-banner'>
        <marquee> 
          <h4 id='nav-banner-text'>The stars are about to align. What will the stars tell you?</h4>
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
