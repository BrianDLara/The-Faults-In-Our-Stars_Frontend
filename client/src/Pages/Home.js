import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import User from '../components/User'

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(`http://localhost:3001/api/users`)
      setUsers(response.data)
    }
    getUsers()
  }, [])

  return (
    <div id="Home">
      <h1>Zodiac Users</h1>
      {users.map((user) => (
        <Link to={`/user_details/${user.id}/user_profile`}>
          <User
            key={user.id}
            id={user.id}
            profilePic={user.image}
            firstName={user.firstName}
            lastName={user.lastName}
            zodiacName={user.user_sign.name}
          />
        </Link>
      ))}
    </div>
  )
}

export default Home
