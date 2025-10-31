import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import './About.css'


function About() {
  return (
    <>
    
    <div className="about-section">
      <Navbar />
      <h1 className="heading">About Us</h1>
      <p className="para">
      Moodlens is an AI-powered chatbot system designed to support individuals in identifying early signs of depression through compassionate, confidential, and intelligent conversation. Our mission is to bridge the gap between silence and support by offering a safe space where users can express themselves freely—anytime, anywhere.<br /><br />

    <h3>Our Mission</h3>

    We aim to empower individuals to better understand their mental health and seek timely help. By leveraging technology, we strive to reduce the stigma around depression and make emotional support more accessible to everyone.<br/><br />

    <h3>What We Do</h3>

    Our chatbot engages users in meaningful dialogue, carefully analyzing language patterns, emotional cues, and behavioral markers using state-of-the-art natural language processing (NLP) and machine learning. While we do not diagnose, our system can help detect signs commonly associated with depression and gently guide users toward professional help when necessary.<br /><br />

    <h3>Key Features</h3>
    
    <ul>
    <li>Private & Confidential: Conversations are secure, encrypted, and never shared.</li>

    <li>24/7 Availability: Support when you need it most, day or night.</li>

    <li>Non-Judgmental Listening: A safe space to talk freely without fear of judgment.</li>

    <li>Resource Guidance: Suggestions for professional help, hotlines, or coping strategies.</li>
    </ul>
    <br />
    <h3>Why It Matters</h3>

    Mental health is as vital as physical health, yet it often goes unnoticed or untreated. Early detection can make a significant difference. By creating this system, we hope to make it easier for people to acknowledge their feelings and take the first step toward healing.<br/><br />

    <h3>Disclaimer</h3>

    Our chatbot is not a replacement for licensed mental health professionals. If you're in crisis or need urgent help, please contact a mental health professional or emergency services in your area.<br/><br />
    </p>
    <Footer/>
   </div>
    
    </>
  )
}

export default About