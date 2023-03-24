import React, { useState, useEffect, useContext } from 'react'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/feedbackContext'

const FeedbackForm = () => {
  const { createFeedback, updateFeedback, selectedItem } = useContext(FeedbackContext)
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    if (selectedItem.edit) {
      setText(selectedItem.item.text)
      setRating(selectedItem.item.rating)
      setBtnDisabled(false)
    }
  }, [selectedItem])

  const handleTextChange = (e) => {
    setText(e.target.value)
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length < 10) {
      setMessage('Text must be at least 10 characters.')
      setBtnDisabled(true)
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (selectedItem.edit) {
      updateFeedback(selectedItem.item.id, text, rating)
    }

    if (selectedItem.edit === false && text && rating) {
      createFeedback(text, rating)
    }

    setText('')
    setRating(10)
  }

  const handleClick = (rating) => {
    setRating(rating)
  }

  return (
    <div className='feedback-form'>
        <RatingSelect selectRating={(rating) => handleClick(rating)}/>
        <form onSubmit={handleSubmit}>
          <div className='submit-element'>
              <input onChange={handleTextChange} value={text} id="feedback" name="feedback" type="text" placeholder="Type your feedback" />
              <button className="btn" type="submit" disabled={btnDisabled}>{selectedItem.edit ? 'Update' : 'Send Feedback'}</button>
          </div>
        </form>
        {message && <p>{message}</p>}
    </div>
  )
}

export default FeedbackForm
