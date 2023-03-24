import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackList from "./components/FeedbackList"
import About from "./components/About"
import Header from "./components/Header"
import { FeedbackProvider } from "./context/feedbackContext"

export const App = () => {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <Routes>
                    <Route index element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </FeedbackProvider>
    )
}
