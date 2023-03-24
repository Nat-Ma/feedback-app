import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/feedbackContext'

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext)

  const feedbackItems = feedback.map(item => (
    <FeedbackItem  
      key={item.id} 
      id={item.id} 
      text={item.text} 
      rating={item.rating}
    />
  ))

  return (
    <div className='list'>
      {feedbackItems ? feedbackItems : <p>No feedback yet</p>}
    </div>
  )
}

export default FeedbackList
