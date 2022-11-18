import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-page-links">
            <Link to={`/`}>
            <h2 className="footer-item">Home</h2>
            </Link>
            <Link to={`/profile`}>
            <h2 className="footer-item">Profile</h2>
            </Link>
            <Link to={`/zodiacs`}>
            <h2 className="footer-item">Zodiac Signs</h2>
            </Link>
            <Link to={`/about_us`}>
            <h2 className="footer-item">About Us</h2>
            </Link>
        </div>
        <div className="footer-creator-section">
        <div className="footer-creators-container">
            <h2 className="footer-item">Chris Clarke-Gonzalez</h2>
            <a className="creator-link-container" href={`https://www.linkedin.com/in/chris-clarke-gonzalez-03588555/`}>
                <img className="footer-image" src={`https://i.imgur.com/GQpmYIM.png`} alt={`Linked In logo`} width='20px'/>
                <h3 className="footer-item">LinkedIn</h3></a>
            <a className="creator-link-container" href={`https://github.com/sirchclarke`}>
                <img className="footer-image" src={`https://i.imgur.com/cjwavRj.png`} alt={`Linked In logo`} width='20px' height='20px'/>
                <h3 className="footer-item">Github</h3>
            </a>
            
        </div>
        <div className="footer-creators-container">
            <h2 className="footer-item">Brian Lara</h2>
            <a className="creator-link-container" href={`https://www.linkedin.com/in/brian-lara/`}>
                <img className="footer-image" src={`https://i.imgur.com/GQpmYIM.png`} alt={`Linked In logo`} width='20px'/>
                <h3 className="footer-item">LinkedIn</h3>
            </a>

            <a className="creator-link-container" href={`https://github.com/BrianDLara`}>
                <img className="footer-image" src={`https://i.imgur.com/cjwavRj.png`} alt={`Linked In logo`} width='20px' height='20px'/>
                <h3 className="footer-item">Github</h3>
            </a>

        </div>
        <div className="footer-creators-container">
            <h2 className="footer-item">Stephan D Ramalho</h2>
            <a className="creator-link-container" href='https://www.linkedin.com/in/stephan-ramalho'>
                <img className="footer-image" src={`https://i.imgur.com/GQpmYIM.png`} alt={`Linked In logo`} width='20px'/>
                <h3 className="footer-item">LinkedIn</h3>
            </a>
            <a className="creator-link-container" href='https://github.com/sramalho94'>
                <img className="footer-image" src={`https://i.imgur.com/cjwavRj.png`} alt={`Linked In logo`} width='20px' height='20px'/>
                <h3 className="footer-item">Github</h3>
            </a>
        </div>
        <div className="footer-creators-container">
            <h2 className="footer-item">Ryan Caillet</h2>
            <a className="creator-link-container" href='https://www.linkedin.com/in/ryan-caillet/'>
                <img className="footer-image" src={`https://i.imgur.com/GQpmYIM.png`} alt={`Linked In logo`} width='20px'/>
                <h3 className="footer-item">LinkedIn</h3>
            </a>
            <a className="creator-link-container" href='https://github.com/rycaillet'>
                <img className="footer-image" src={`https://i.imgur.com/cjwavRj.png`} alt={`Linked In logo`} width='20px' height='20px'/>
                <h3 className="footer-item">Github</h3>
            </a>
        </div>
        </div>
    </div>
  )
}

export default Footer
