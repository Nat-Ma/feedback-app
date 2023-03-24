import React, { createContext, useState } from "react"
import { FeedbackData } from "../components/data/feedbackData"
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [selectedItem, setSelectedItem] = useState({
    item: {}, 
    edit: false
  })

  const createFeedback = (text, rating) => {
    const newRating = {
      id: uuidv4(),
      text,
      rating
    }
    setFeedback(
      [...feedback, newRating]
    )
  }

  const selectFeedback = (id) => {
    setSelectedItem(({
      item: feedback.find(item => item.id === id),
      edit: true
    }))
  }

  const updateFeedback = (id, text, rating) => {
    setFeedback(feedback.map(item => {
      if (item.id === id) {
        item.text = text
        item.rating = rating
        return item
      }
      return item
    }))
    setSelectedItem({
      item: {}, 
      edit: false
    })
  }

  const deleteFeedback = (id) => {
    setFeedback(
      feedback.filter(item => item.id !== id)
    )
  }

  return (
    <FeedbackContext.Provider
        value={{
          feedback,
          createFeedback,
          deleteFeedback,
          selectFeedback,
          updateFeedback,
          selectedItem,
        }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

