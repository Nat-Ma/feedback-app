import React, { useContext } from 'react'
import FeedbackContext from '../context/feedbackContext'

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext)

  let averageRating =
      feedback.reduce((acc, curr) => (
        acc + curr.rating
      ), 0) / feedback.length

  averageRating = averageRating.toFixed(1).replace(/[.,]0$/, '')
  
  return (
    <div className="stats">
      <p>{feedback.length} Reviews</p>
      <p>Average rating: {isNaN(averageRating) ? 0 : averageRating}</p>
    </div>
  )
}

export default FeedbackStats
