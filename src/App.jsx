import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import './css/App.css'
import LandingPage from './pages/LandingPage'
import VideoTestimonial from './components/VideoTestimonial'

function App() {
  return (
    <>
      <LandingPage />
    </>
  )
}

export default App
