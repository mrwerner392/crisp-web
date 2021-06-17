import React from 'react';

const ReviewRatings = ({ ratings }) => {
  
  return (
    <div className='review-ratings' >{ Object.keys(ratings).join(' ') }</div>
  )
}

export default ReviewRatings