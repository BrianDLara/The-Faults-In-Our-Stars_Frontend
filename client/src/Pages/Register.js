import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    image: '',
    description: '',
    phoneNumber: '',
    gender: '',
    username: '',
    password: '',
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  let navigate = useNavigate()

  const writeGender = () => {
    if (
      document.getElementById('other-option').value === "What's your gender?"
    ) {
      document.getElementById('gender-input').value = ' '
      document.getElementById('gender-input').style.display = 'block'
    } else if (
      document.getElementById('other-option').value === 'Male' ||
      document.getElementById('other-option').value === 'Female'
    ) {
      document.getElementById('gender-input').style.display = 'none'
    }
  }

  const handleChange = (e) => {
    writeGender()
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      image: formValues.image,
      description: formValues.description,
      phoneNumber: formValues.phoneNumber,
      gender: formValues.gender,
      username: formValues.username,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/login')
  }

  return (
    <div className="register-container">
      <form className="form-items" onSubmit={handleSubmit}>
        {/* new user first and last name */}
        <section className="section-container top-section">
          {/* first name section */}
          <div className="field-container">
            <div className="field-text">
              <label htmlFor="firstName">First Name:</label>
            </div>
            <input
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formValues.firstName}
              className="text-input"
              required
            />
          </div>
          {/* last name section */}
          <div className="field-container">
            <div className="field-text">
              <label htmlFor="lastName">Last Name: </label>
            </div>
            <input
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formValues.lastName}
              className="text-input"
              required
            />
          </div>
        </section>
        {/* contact info */}
        <section className="section-container">
          <div className="field-container">
            <div className="field-text">
              <label htmlFor="email">Email Address</label>
            </div>
            <input
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="Email"
              value={formValues.email}
              className="text-input"
              required
            />
          </div>
          <div className="field-container">
            <div className="field-text">
              <label htmlFor="phoneNumber">Phone Number</label>
            </div>
            <input
              onChange={handleChange}
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              value={formValues.phoneNumber}
              className="text-input"
              required
            />
          </div>
        </section>
        <section className="section-container">
          <div className="field-container">
            <div className="field-text">
              <label htmlFor="gender">Gender:</label>
            </div>
            <select
              onChange={handleChange}
              name="gender"
              value={formValues.gender}
              className="text-input"
              id="other-option"
              required
            >
              <option>I am a</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="What's your gender?">Other</option>
            </select>
            <input
              onChange={handleChange}
              name="gender"
              type="text"
              placeholder="What's your gender?"
              value={formValues.gender}
              className="text-input"
              id="gender-input"
              style={{ display: 'none' }}
            />
          </div>
          <div className="field-container">
            <div className="field-text">
              <label htmlFor="image">Image</label>
            </div>
            <input
              onChange={handleChange}
              name="image"
              type="file"
              id="image-input"
              placeholder="Choose an image"
              value={formValues.image}
              className="text-input"
              required
            />
          </div>
        </section>
        <section className="single-section-container">
          <div className="single-field-container">
            <div className="field-text">
              <label htmlFor="description">Bio:</label>
            </div>
            <textarea
              onChange={handleChange}
              name="description"
              cols="60"
              rows="3"
              placeholder="Write a short description about yourself"
              value={formValues.description}
              className="text-input-bio"
            />
          </div>

          <div className="single-field-container user-container">
            <div className="field-text">
              <label htmlFor="username">Username</label>
            </div>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="username"
              value={formValues.username}
              className="text-input"
              required
            />
          </div>
        </section>
        <section className="section-container">
          <div className="field-container">
            <div className="field-text">
              <label htmlFor="password">Password</label>
            </div>
            <input
              onChange={handleChange}
              name="password"
              type="text"
              placeholder="Password"
              value={formValues.password}
              className="text-input"
              required
            />
          </div>
          <div className="field-container">
            <div className="field-text">
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              className="text-input"
              required
            />
          </div>
        </section>

        <div className="submit-button-container">
          <button
            className="submit-button"
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
