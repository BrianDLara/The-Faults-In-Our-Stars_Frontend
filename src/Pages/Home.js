import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import User from '../components/User'

const Home = ({ user, authenticated }) => {
  const navigate = useNavigate()

  const [users, setUsers] = useState(null)

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        `https://the-faults-in-our-stars.herokuapp.com/api/users`
      )
      setUsers(response.data)
    }
    getUsers()
  }, [])

  return user && authenticated ? (
    <div id="home-container">
      <header className="home-header">
        <h2 className="welcome-userName medieval">Welcome {user.username}!</h2>
        <span>
          <h2>
            {' '}
            Choose &nbsp; "
            <img
              src={`https://i.imgur.com/aOo2Bcv.png`}
              alt={`x`}
              width="20px"
            />
            " &nbsp; or &nbsp; "
            <img
              src={`https://i.imgur.com/0z8S6Uu.png`}
              alt={`x`}
              width="20px"
            />
            " &nbsp; to start adding people to your Zodiac Circle 💫
          </h2>
        </span>
      </header>
      <main className="home-main">
        {users?.map((account) => (
          <User
            key={account.id}
            id={account.id}
            profilePic={account.image}
            firstName={account.firstName}
            lastName={account.lastName}
            zodiacName={account.user_sign.name}
          />
        ))}
      </main>
    </div>
  ) : (
    <div className="protected">
      <h3 className="please-signin">
        Oops! You must be logged in to have access to the community!
      </h3>
      <button className="form-button" onClick={() => navigate('/login')}>
        Login
      </button>
    </div>
  )
}

export default Home
