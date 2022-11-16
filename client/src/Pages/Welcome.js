import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="welcome-container">
      <header id="welcome-page-header">
        <img
          src="https://i.imgur.com/7O8c7S6.png"
          alt="website logo"
          className="welcome-logo"
          width="10rem"
        />
        <div className="welcome-text">
          <h2>The Faults In Our Stars</h2>
          <h4 className="welcome-header-text">
            Please follow these guidelines
          </h4>
        </div>
      </header>

      <body className="welcome-body-container">
        <div className="welcome-body-text-container">
          <h3>
            <img
              src="/images/checkmark.png"
              alt="website logo"
              width="20rem"
              className="checkmark"
            />
            Be Yourself
          </h3>
          <h4 className="welcome-body-text">
            Make sure your photos, age, and bio are true to who you are.
          </h4>
        </div>

        <div className="welcome-body-text-container">
          <h3>
            <img
              src="/images/checkmark.png"
              alt="website logo"
              width="20rem"
              className="checkmark"
            />
            Stay Safe
          </h3>
          <h4 className="welcome-body-text">
            Do not be too quick to give out personal information.
          </h4>
        </div>

        <div className="welcome-body-text-container">
          <h3>
            <img
              src="/images/checkmark.png"
              alt="website logo"
              width="20rem"
              className="checkmark"
            />
            Play it cool
          </h3>
          <h4 className="welcome-body-text">
            Respect others and treat them as you would like to be treated.
          </h4>
        </div>

        <div className="welcome-body-text-container">
          <h3>
            <img
              src="/images/checkmark.png"
              alt="website logo"
              width="20rem"
              className="checkmark"
            />
            Be proactive
          </h3>
          <h4 className="welcome-body-text">
            Always report bad behavior-"see something say something"
          </h4>
        </div>

        <div id="welcome-button-container">
          <Link to="/">
            <button id="welcome-button">I AGREE</button>
          </Link>
        </div>
      </body>
    </div>
  )
}

export default Welcome
