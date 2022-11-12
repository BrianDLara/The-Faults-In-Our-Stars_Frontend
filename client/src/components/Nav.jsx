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
          <Link to ={`/`}><img src="/images/logo1.png" alt="website logo" className='logo'/></Link>
          <div id='links-container'>
              <NavLink to = '/' className="nav-link"> Home </NavLink>
              <NavLink to = '/register' className="nav-link"> Register </NavLink>
              <NavLink to = '/login' className="nav-link"> Login </NavLink>
              <NavLink to = '/zodiacs' className="nav-link"> Zodiac Signs </NavLink>
              <NavLink to = '/profile' className="nav-link"> Profile </NavLink>
              <NavLink to = '/about_us' className="nav-link"> About Us </NavLink>
          </div>
        </div>
    
    </div>
  )
}

export default Nav
