import React from 'react'

import { CreateReview } from '../services/Auth'

import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const NewReviewForm = ({ user, authenticated }) => {
  //routed-dom imports
  let navigate = useNavigate()
  let { zodiacId } = useParams()
  let { userId } = useParams()

  //initial state of the form with useParams to assign the _id & product_id
  const initialState = {
    // id: reviewId,
    // rating: '',
    title: '',
    description: '',
    userId: userId,
    // likes: '',
    // dislikes: '',
    zodiacId: zodiacId
  }

  const [formState, setFormState] = useState(initialState)

  //refreshes the page. It will be used after submitting a form
  // const handleRefresh = () => {
  //   window.location.reload(false)
  // }

  //assigns the form inputs to the appropriate keys.
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  //if-else statement that distinguishes between a post-review axios call vs put-review axios call
  const handleSubmit = async (e) => {
    e.preventDefault()
    // axios.post(
    //   `https://the-faults-in-our-stars.herokuapp.com/api/reviews/new_review/user/${userId}/zodiac_id/${zodiacId}`,
    //   formState
    // )
    await CreateReview({ ...formState })
    navigate(`/zodiacs/details/${zodiacId}`)
    // handleRefresh()
  }

  return user && authenticated ? (
    <div className="review-container">
      <form onSubmit={handleSubmit} className="review-form">
        {/* title section */}
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
        {/* description section */}
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
        {/* <Link to={`/zodiacs/details/${zodiacId}`}> */}
        <button type="submit" className="form-button">
          Submit
        </button>
        {/* </Link> */}
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
