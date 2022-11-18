import React from 'react'

import { UpdateReview } from '../services/Auth'

import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditReviewForm = () => {
  let navigate = useNavigate()
  let { zodiacId } = useParams()
  let { userId } = useParams()
  let { reviewId } = useParams()

  const initialState = {
    title: '',
    description: '',
    likes: '',
    dislikes: '',
    userId: userId,
    zodiacId: zodiacId
  }

  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const getReview = async () => {
      const res = await axios.get(
        `https://the-faults-in-our-stars.herokuapp.com/api/reviews/${reviewId}`
      )
      setFormState(res.data)
    }
    getReview()
  }, [])

  const handleRefresh = () => {
    window.location.reload(false)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await UpdateReview({ ...formState })
    navigate(`/zodiacs/details/${zodiacId}`)
    handleRefresh()
  }

  return (
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
            placeholder="Write about the product. Did you like it or disliked it."
            className="input"
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditReviewForm
