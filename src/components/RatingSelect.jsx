import React, { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/feedbackContext'

const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const RatingSelect = ({ selectRating }) => {
  const { selectedItem } = useContext(FeedbackContext)

  const [selected, setSelected] = useState(10)

  useEffect(() => {
    if (selectedItem.edit === true) {
      setSelected(selectedItem.item.rating)
    } else {
      setSelected(10)
    }
  }, [selectedItem])

  const handleClick = (rating) => {
    setSelected(rating)
    selectRating(rating)
  }

  return (
    <div className='rating-container'>
        {ratings.map((rating, i) => (
          <div 
            key={`${rating}-${i}`} 
            className={`rating ${rating === selected && 'rating-selected'}`}
            onClick={() => handleClick(rating)}
            id={rating}
          >{rating}</div>
        ))}
    </div>
  )
}

export default RatingSelect
