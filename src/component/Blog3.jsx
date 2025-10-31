import React from 'react'
import Navbar from './Navbar'
import './Blogpost.css'
import photo3 from './image/blog3.jpeg'

function Blog3() {
  return (
    <>
        <div className='blogpost'>
        <Navbar/>
        <div className='blog-container'>
            <h1 className='heading'>Why Employers Should Prioritize Mental Health in the Workplace</h1>
            <p className='para'>Mental health support in the workplace is not just good for employees—it is good for business. Learn how companies can create mentally healthy work environments.</p>
            <img className='image' src={photo3} alt="pic" />
            <p>
                <h3>The Business Case for Mental Health</h3>
                <span>Mental health challenges cost employers billions annually through lost productivity, absenteeism, and turnover. Investing in employee mental health is not just the right thing to do—it is smart business.</span>
                <h4>Impact on Productivity</h4>
                <span>Employees struggling with mental health issues are more likely to:</span>
                <ul>
                    <li>Take more sick days</li>
                    <li>Be less productive when at work</li>
                    <li>Have difficulty concentrating</li>
                    <li>Experience increased conflict with colleagues</li>
                </ul>
                <h4>How Employers Can Support Mental Health</h4>
                <span>There are many ways employers can create mentally healthy workplaces:</span>
                <ul>
                    <li>Provide access to mental health resources</li>
                    <li>Offer flexible work arrangements</li>
                    <li>Create a culture of open communication</li>
                    <li>Train managers to recognize mental health concerns</li>
                    <li>Implement AI-powered mental health support platforms</li>
                </ul>

    
            </p>

        </div>
        </div>
    </>
    
  )
}

export default Blog3