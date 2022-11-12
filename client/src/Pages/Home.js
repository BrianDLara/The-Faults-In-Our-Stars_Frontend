import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id="Home">
      <Link to="/zodiacs">
        <button to="/zodiacs">Gemini</button>
      </Link>
      <h1>Home </h1>
    </div>
  )
}

export default Home
