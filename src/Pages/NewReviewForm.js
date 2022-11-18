import React from 'react'
import { CreateReview } from '../services/Auth'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const NewReviewForm = ({ user, authenticated }) => {
  let navigate = useNavigate()
  let { zodiacId } = useParams()
  let { userId } = useParams()

  const initialState = {
    title: '',
    description: '',
    userId: userId,
    likes: 0,
    dislikes: 0,
    zodiacId: zodiacId
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await CreateReview({ ...formState })
    navigate(`/zodiacs/details/${zodiacId}`)
  }

  return user && authenticated ? (
    <div className="review-container">
      <form onSubmit={handleSubmit} className="review-form">
        <div className="input-wrapper">
          <label htmlFor="title" className="form-header">
            Write a Headline
          </label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            value={formState.title}
            required
            placeholder="What's your review about?"
            className="input"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="description" className="form-header">
            Write a description
          </label>
          <textarea
            id="description"
            cols="55"
            rows="10"
            onChange={handleChange}
            value={formState.description}
            required
            placeholder="Spill the tea about this zodiac sign"
            className="input"
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be logged in to have access to the community!</h3>

      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  )
}

export default NewReviewForm
