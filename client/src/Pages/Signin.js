import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../../../services/Auth'

const Signin = ({ toggleAuthenticated, setUser }) => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    toggleAuthenticated(true)
    navigate('')
  }
  return <div>Signin</div>
}

export default Signin
