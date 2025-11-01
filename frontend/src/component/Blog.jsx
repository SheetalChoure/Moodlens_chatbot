import React from 'react';
import './Blog.css'
import Navbar from './Navbar';
import Footer from './footer';
import photo from './image/blog1img.avif'
import photo2 from './image/blog2.jpg'
import photo3 from './image/blog3.jpeg'
import photo4 from './image/blog4.png'
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <>
    
    <div className='blog-post'>
      <Navbar />
      <div className='header'>
      <h1>Mental Health Blog</h1>
      <p>Expert insights, research, and practical tips for mental wellness. Discover evidence-based strategies and learn about AI-powered mental health support.</p>
      </div>
      <div className='blog-container'>
      <div className='blog'>
        <img src={photo} alt="pic" />
        <h1>5 Daily Practices to Manage Anxiety Naturally</h1>
        <p>Learn evidence-based techniques to reduce anxiety and improve your mental wellbeing with these simple daily practices that you can start implementing today.</p>
        
        <Link to="/Blog/Blog1" >Read More</Link>
        
      </div>
      <div className='blog'>
        <img src={photo2} alt="pic"  />
        <h1>Mindfulness Meditation: A Beginner's Guide to Mental Clarity</h1>
        <p>Start your mindfulness journey with this comprehensive guide. Learn simple meditation techniques that can help reduce stress and improve your mental wellbeing.</p>
        
        <Link to="/Blog/Blog2" >Read More</Link>
      </div>
      <div className='blog'>
        <img src={photo3} alt="pic" />
        <h1>Why Employers Should Prioritize Mental Health in the Workplace</h1>
        <p>Mental health support in the workplace is not just good for employees—it is good for business. Learn how companies can create mentally healthy work environments.</p>
        
        <Link to="/Blog/Blog3" >Read More</Link>
      </div>
      <div className='blog'>
        <img src={photo4} alt="pic" />
        <h1>How AI Mental Health Support is Revolutionizing Access to Care</h1>
        <p>Discover how AI-powered mental health platforms are making professional mental health support more accessible, affordable, and effective for millions of people.</p>
        
        <Link to="/Blog/Blog4">Read More</Link>

      </div>
    </div>
    <Footer/>
    </div>
    
    </>
  )
}

export default Blog