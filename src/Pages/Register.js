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
    zodiacId: '',
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
      zodiacId: formValues.zodiacId,
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
        <section className="section-container top-section">
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
              type="text"
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
        </section>
        <section className="section-container">
          <div className="field-container">
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

          <div className="field-container">
            <div className="field-text">
              <label htmlFor="zodiac">Zodiac Sign:</label>
            </div>
            <select
              onChange={handleChange}
              name="zodiacId"
              value={formValues.zodiacId}
              className="text-input"
              id="zodiac-option"
              required
            >
              <option>Choose a sign</option>
              <option value="1">Gemini</option>
              <option value="2">Aries</option>
              <option value="3">Taurus</option>
              <option value="4">Cancer</option>
              <option value="5">Leo</option>
              <option value="6">Virgo</option>
              <option value="7">Libra</option>
              <option value="8">Scorpio</option>
              <option value="9">Sagittarius</option>
              <option value="10">Capricorn</option>
              <option value="11">Aquarius</option>
              <option value="12">Pisces</option>
            </select>
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
              type="password"
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
            type="submit"
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
