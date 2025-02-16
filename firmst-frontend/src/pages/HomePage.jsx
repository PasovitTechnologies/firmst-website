import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SuccessStories from '../components/SuccessStories'
import Programs from '../components/Programs'
import Process from '../components/Process'
import FeedbackVideo from '../components/FeedbackVideo'
import RequestForm from '../components/RequestForm'

const HomePage = () => {
  const footerRef = useRef(null); // Define footerRef

  return (
    <div>
      <Navbar/>
      <HeroSection footerRef={footerRef}/>
      <SuccessStories/>
      <Programs/>
      <Process/>
      <FeedbackVideo/>
      <RequestForm footerRef={footerRef}/>
    </div>
  )
}

export default HomePage