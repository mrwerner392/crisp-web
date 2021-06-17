import React from 'react';

const ReviewComments = ({ comments }) => {

  return (
    <div className='review-comments'>
      <p>{ comments }</p>
    </div>
  )
}

export default ReviewComments