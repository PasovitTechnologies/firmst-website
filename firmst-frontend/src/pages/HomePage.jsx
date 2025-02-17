import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SuccessStories from '../components/SuccessStories'
import Programs from '../components/Programs'
import Process from '../components/Process'
import FeedbackVideo from '../components/FeedbackVideo'
import RequestForm from '../components/RequestForm'
import { FaArrowUp } from 'react-icons/fa'

const HomePage = () => {
  const footerRef = useRef(null); // Define footerRef
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <Navbar/>
      <HeroSection footerRef={footerRef}/>
      <SuccessStories/>
      <Programs/>
      <Process/>
      <FeedbackVideo/>
      <RequestForm footerRef={footerRef}/>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-15 right-15 bg-[#00295f] text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition-all"
          style={{ zIndex: 1000 }}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  )
}

export default HomePage