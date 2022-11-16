import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import { DestroyReview } from '../services/Auth'
// import { useParams } from 'react-router-dom'




const Reviews = ({id, userId, zodiacId, title, description, likes, dislikes}) => {
//   let { productId } = useParams() 

  const handleRefresh = () => {
    window.location.reload(false);
  }

  const handleDelete = async () => {
   await DestroyReview({id})
    handleRefresh();
   
  }
  







  return (
    <div className='reviews-container'>
      <div id='review-options'>
        {/* <Link title={props.title} description={props.description} to={`/new_review/user_id/${props.userId}/zodiac_id/${props.zodiacId}/review_id/${props.id}`}>  */}
        <Link  to={`/edit_review/user_id/${userId}/zodiac_id/${zodiacId}/review_id/${id}`}> 
        
          <button className='review-link'>Edit</button>
        </Link>
        <span className='review-link-divider'>|</span>
        <button onClick={handleDelete}  className='review-link'>Delete</button>
      </div>
        <h2 className='review-title'>{title}</h2>
        <h3 className='review-description'>{description}</h3>
        <h3 className='review-likes'>{likes}</h3>
        <h3 className='review-dislikes'>{dislikes}</h3>
    </div>


  )
}

export default Reviews
