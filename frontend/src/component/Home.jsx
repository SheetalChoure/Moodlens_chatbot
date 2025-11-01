import React from 'react';
import Navbar from './Navbar'
import Footer from './footer';
import { useNavigate } from 'react-router-dom';

import { FaClock, FaLock } from 'react-icons/fa';
import bg from './image/bg.jpg';

import myvideo from './image/video.mp4';

import './Home.css'

function Home(){

  const navigate = useNavigate();

  const openChatbot = () => {
    navigate('/ChatBot');
  };


  return(
    <>
    
    <div className='home'>
      <Navbar/>
      
     <div className='header'>
      <h1 className='heading'>AI-Powered Chatbot for Early Detection of Depression</h1><br/><br />
      <span >Feeling Low? Start a Chat-It Could Help.</span><br /><br />

      
          <button onClick={openChatbot}>
       Talk to Moodlens
      </button>
    
      <video className='chat_video' src={myvideo} autoPlay muted loop ></video>

      </div>
      
      {/* <button>Talk to Moodlens</button> */}

      <div className='box-row'>
      <div className="availability-box">
      <FaClock className="availability-icon" /> 
      
        <h3>24/7 Availability</h3>
        <p>We're here for you anytime, anywhere.</p>
      </div>
    
    

    <div className="safe-box">
       <FaLock className="safe-icon" /> 
        <h3>Safe & Secure</h3>
        <p>Protected 24/7 — your safety is our priority.</p>
      
    </div>
    </div>
</div>
    <Footer />
    </>
  )


}


export default Home