import React, { createContext, useEffect, useState } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [selectedItem, setSelectedItem] = useState({
    item: {}, 
    edit: false
  })

  useEffect(() => {
    getFeedback()
  }, [])

  const getFeedback = async () => {
    const response = await fetch("/feedback")
    const data = await response.json()
    setFeedback(data)
  }

  const createFeedback = async (text, rating) => {
    const newRating = { text, rating }
    const response = await fetch("/feedback", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRating)
    })
    const data = await response.json()
    setFeedback([...feedback, data])
  }

  const selectFeedback = (id) => {
    setSelectedItem(({
      item: feedback.find(item => item.id === id),
      edit: true
    }))
  }

  const updateFeedback = async (id, text, rating) => {
    const item = feedback.find(item => item.id === id)
    item.text = text
    item.rating = rating
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
    const data = response.json()

    setFeedback(feedback.map(item => (item.id === id) ? { ...item, ...data } : item))
    setSelectedItem({ item: {}, edit: false })
  }

  const deleteFeedback = async (id) => {
    await fetch(`/feedback/${id}`, {
      method: "DELETE"
    })
    setFeedback(feedback.filter(item => item.id !== id))
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

