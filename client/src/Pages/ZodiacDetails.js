import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import {
//   CheckSession,
//   CreateReview,
//   DestroyReview,
//   UpdateReview
// } from './services/Auth'
import Reviews from '../components/Reviews'

const ZodiacDetails = ({ user }) => {
  // const initialReviewState = {
  //   rating: '',
  //   description: '',
  //   zodiacId: '',
  //   userId: ''
  // }
  const { id } = useParams()
  const [reviews, setReviews] = useState(null)

  const getReviews = async () => {
    const response = await axios.get(
      `https://the-faults-in-our-stars.herokuapp.com/api/reviews/zodiac/${id}`
    )
    setReviews(response.data.reviews)
    console.log(response.data.reviews)
  }

  const [zodiac, setZodiac] = useState(' ')

  const getZodiacs = async () => {
    const response = await axios.get(
      `https://the-faults-in-our-stars.herokuapp.com/api/zodiacs/${id}`
    )
    setZodiac(response.data)
  }

  useEffect(() => {
    getZodiacs()

    getReviews()
  }, [])

  return zodiac !== null ? (
    <div>
      <section>
        <div className="ZodiacDetails" key={zodiac.id} id={zodiac.id}>
          <h2> {zodiac.name} </h2>
          <img src={zodiac.image} alt={zodiac.name} />
          <h3> {zodiac.description} </h3>
        </div>
      </section>

      <section>
        {reviews?.map((review) => (
          <Reviews
            id={review?.id}
            key={review?.id}
            rating={review?.name}
            description={review?.description}
            zodiacId={review?.zodiacId}
            userId={review?.userId}
          />
        ))}
      </section>
      {/* {reviews?.map((review) => (
        <Link
          type="button"
          to={`/new_review/user_id/${user.id}/zodiac_id/${zodiac.id}/review_id/${review.id}`}
        >
          <button className="review-button">Add Review</button>
        </Link>
      ))} */}

      <Link
        type="button"
        to={`/new_review/user_id/${user.id}/zodiac_id/${zodiac.id}`}
      >
        <button className="review-button">Add Review</button>
      </Link>
    </div>
  ) : null
}

export default ZodiacDetails
