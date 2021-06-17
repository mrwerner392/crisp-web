import React, { Fragment } from 'react';
import ReviewRestaurant from './ReviewRestaurant';
import ReviewRatings from './ReviewRatings';
import ReviewComments from './ReviewComments';

const ReviewCard = props => {

  const restaurantName = 'Test Restaurant'
  const address = '44 West Test Drive, New York, NY 10001'
  const images = [
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/7/11/0/FNK_the-best-chicken-parmesan_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1562853897238.jpeg',
    'https://www.jocooks.com/wp-content/uploads/2019/04/chicken-parmesan-1-32.jpg',
    'https://www.askchefdennis.com/wp-content/uploads/2020/08/chicken-parm-with-linguine-13.jpg'
  ]
  const isFavorite = false
  const ratings = {
    food: 4,
    service: 4.5,
    atmosphere: 3.5,
    value: 2,
    overall: 3
  }
  const comments = 'dsfnj asgnjngf alsdkfnaln sadf f aksdlf sdfnklsa fnd fla dnkflsna dflnadkfna sdffd  ankffdd fsd.'

  return (
    <Fragment>
      <div className='review-card'>
        <ReviewRestaurant
          restaurantName={ restaurantName }
          address={ address }
          images={ images }
          isFavorite={ isFavorite }
        />
        <ReviewRatings
          ratings={ ratings }
        />
        <ReviewComments
          comments={ comments }
        />
      </div>
    </Fragment>
  )
}

export default ReviewCard