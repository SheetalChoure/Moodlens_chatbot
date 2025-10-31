import React from 'react'
import photo from './image/blog1img.avif'
import Navbar from './Navbar'
import './Blogpost.css'


function Blog1() {
  return (
    <>
    <div className='blogpost'>
    <Navbar/>
    <div className='blog-container'>
      
        <h1 className='heading'>5 Daily Practices to Manage Anxiety Naturally</h1>
        <p className='para'>Learn evidence-based techniques to reduce anxiety and improve your mental wellbeing with these simple daily practices that you can start implementing today.</p>
        <img className='image' src={photo} alt='pic'></img>
        <p>
           <span> Understanding Anxiety:
            Anxiety is a natural response to stress, but when it becomes persistent and overwhelming, it can significantly impact your quality of life. The good news is that there are many effective ways to manage anxiety through daily practices.</span>
            <ol>
            <li> Mindful Breathing</li>
            <span>Deep breathing exercises can activate your body's relaxation response. Try this simple technique:</span>
            <ul>
            <li>Find a comfortable position</li>
            <li>Inhale slowly through your nose for 4 counts</li>
            <li>Hold your breath for 4 counts</li>
            <li>Exhale slowly through your mouth for 6 counts</li>
            <li>Repeat for 5-10 minutes</li>
            </ul>
            <li> Regular Exercise</li>
            <ul>
            <li>Physical activity releases endorphins and reduces stress hormones.</li> 
            <li>Even 30 minutes of moderate exercise daily can significantly reduce anxiety symptoms.</li>
            </ul>

            <li>Consistent Sleep Schedule</li>
            <ul>
            <li>Poor sleep can exacerbate anxiety. </li>
            <li>Establish a regular sleep routine and aim for 7-9 hours of quality sleep each night.</li>
            </ul>

            <li>Limit Caffeine and Alcohol</li>
            <ul>
            <li>Both caffeine and alcohol can increase anxiety symptoms.</li>
            <li> Consider reducing your intake and notice how it affects your anxiety levels.</li>
            </ul>
            <li> Practice Gratitude</li>
            <ul>
            <li>Keeping a gratitude journal can shift your focus from worries to positive aspects of your life.</li>
            <li> Write down three things you're grateful for each day.</li>
            </ul>
 
        </ol>
        </p>
    </div>   
    </div>
    </>
  )
}

export default Blog1