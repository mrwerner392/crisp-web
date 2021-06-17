import React from 'react';

const ReviewRestaurant = props => {

  const {
    restaurantName,
    address,
    images,
    isFavorite
  } = props

  console.log(images)

  return (
    <div className='review-restaurant'>
      <img src={ images[0] } alt='restaurant' style={ {maxWidth: '100%', maxHeight: '100%'} } />
      <div className='review-restaurant-header'>
        <div>
          <h2>{ restaurantName }</h2>
          <p>{ address }</p>
        </div>
        <div>{ isFavorite ? '♥' : '♡' }</div>
      </div>
      <div className='review-restaurant-footer'>
        <button>{ `See ${images.length} images` }</button>
      </div>
    </div>
  )
}

export default ReviewRestaurant