import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Reviews from '../components/Reviews'

const ZodiacDetails = ({ userId, user }) => {
  const { zodiacId } = useParams()
  const [reviews, setReviews] = useState(null)

  const getReviews = useCallback(async () => {
    const response = await axios.get(
      `https://the-faults-in-our-stars.herokuapp.com/api/reviews/zodiac/${zodiacId}`
    )
    setReviews(response.data.reviews)
  }, [zodiacId])

  const [zodiac, setZodiac] = useState(' ')

  const getZodiacs = useCallback(async () => {
    const response = await axios.get(
      `https://the-faults-in-our-stars.herokuapp.com/api/zodiacs/${zodiacId}`
    )
    setZodiac(response.data)
  }, [zodiacId])

  useEffect(() => {
    getZodiacs()

    getReviews()
  }, [getZodiacs, getReviews, user])

  return zodiac !== null ? (
    <div className="zodiac-details-container">
      <section>
        <div className="zodiacDetails" key={zodiac.id} id={zodiac.id}>
          <h2 className="zodiac-details-title"> {zodiac.name} </h2>
          <div className="zodiac-details-image-container">
            <img
              className="zodiac-details-image"
              src={zodiac.image}
              alt={zodiac.name}
            />
          </div>
          <h3 className="zodiac-details-text"> {zodiac.description} </h3>
        </div>
      </section>
      <h1>Reviews</h1>
      <section>
        {reviews?.map((review) => (
          <Reviews
            id={review?.id}
            key={review?.id}
            rating={review?.name}
            title={review?.title}
            description={review?.description}
            zodiacId={review?.zodiacId}
            userId={review?.userId}
            likes={review?.likes}
            dislikes={review?.dislikes}
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
        to={`/new_review/user_id/${user?.id}/zodiac_id/${zodiacId}`}
      >
        <button className="review-button">Add Review</button>
      </Link>
    </div>
  ) : null
}

export default ZodiacDetails
