import { useContext } from 'react'
import FeedbackContext from '../context/feedbackContext'
import Card from './shared/Card'

const FeedbackItem = ({ id, text, rating }) => {
    const { deleteFeedback, selectFeedback } = useContext(FeedbackContext)

    const handleClick = (id) => {
        selectFeedback(id)
    }

    return (
        <Card id={id}>
            <p>{text}</p>
            <h4>{rating}</h4>
            <div className="actions">
                <button onClick={() => handleClick(id)} type="button">Edit</button>
                <button type="button" onClick={() => deleteFeedback(id)}>x</button>
            </div>
        </Card>
    )
}

export default FeedbackItem
