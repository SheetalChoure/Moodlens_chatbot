import React from 'react'
import Navbar from './Navbar'
import './Research.css'
import Footer from './footer'

function Research() {
  return (
    <>
    
    <div className='research'>
      <Navbar />
    <div className='re-container'>
      <h2 className='heading'>Published Research</h2>
      <p className='para'>Here are some web-articles that discuss research or evidence about chatbots for depression , mental health along with notes on strengths & limitations</p>
      <span>Articles:</span>
      <div className='re-box'>
        <h3>Can a Chatbot Really Understand Depression? Here's What the Science Says — ChatCouncil (Aug 2025)</h3>
        <span>This blog reviews scientific evidence, pointing out that chatbots can identify and respond to depressive expressions (through algorithms) and offer supportive interventions, but cautions that long-term clinical proof is still limited.</span><br/>
        <a href="https://chatcouncil.com/blog/can-a-chatbot-really-understand-depression-heres-what-the-science-says/?utm_source=chatgpt.com" target='_blank' rel='noopener noreferrer'>Read</a>
        
      </div>
      <div className='re-box'>
        <h3>AI chatbots are here to help with your mental health, despite limited evidence they work — The Hindu</h3>
        <span>This article presents a balanced perspective: chatbots are appealing because they are free, accessible 24/7, and less stigmatized, but notes that empirical evidence for their long-term effectiveness is still scarce.</span><br />
        <a href="https://www.thehindu.com/sci-tech/technology/ai-chatbots-are-here-to-help-with-your-mental-health-despite-limited-evidence-they-work/article67984641.ece?utm_source=chatgpt.com" target='_blank' rel='noopener noreferrer'>Read</a>
      </div>
      <div className='re-box'>
       <h3>Trained My ChatBot To Be A Therapist. 10/10 Recommend -For Now — NDTV blog</h3>
       <span>A first-person narrative of an author who experimented with making a chatbot “therapeutic.” The blog weaves in research ideas and user experience reflections: how the bot felt in practice versus its theoretical potential.</span><br/>
       <a href="https://www.ndtv.com/blog/mental-health-ai-i-trained-my-chatbot-to-be-a-therapist-10-10-recommend-for-now-5887566?utm_source=chatgpt.com" target='_blank' rel='noopener noreferrer'>Read</a>
      </div>
      <div className='re-box'>
        <h3>Building AI Chatbot for Mental Wellness: How We developed chatbot for Joy and Emotional Health — HashStudioz Technologies blog</h3>
        <span>This is more of a development blog, but it gives insight on how the team incorporated emotion detection, therapy-inspired flows, privacy, and architecture. They also discuss “Why AI Chatbots Actually Work for Mental Health” in their context, citing usability as a key factor.</span><br/>
        <a href="https://www.hashstudioz.com/blog/building-ai-chatbot-for-mental-wellness-how-we-developed-chatbot-for-joy-and-emotional-health/?utm_source=chatgpt.com" target='_blank' rel='noopener noreferrer'>Read</a>
      </div>
      <div className='re-box'>
        <h3>Tackling Depression with Machine Learning via Chatbot” — Analytics Vidhya (Medium)</h3>
        <span>This blog is more conceptual. It discusses how sentiment analysis and machine learning can be used to detect mental states (e.g. sadness) and then respond via chatbot interventions. It's less about proof and more about method and potential.</span><br/>
        <a href="https://medium.com/analytics-vidhya/tackling-depression-with-machine-learning-via-chatbot-1e5f5546f36a" target='_blank' rel='noopener noreferrer'>Read</a>
      </div>
     </div>
    </div>
    <Footer />
    </>
  )
}

export default Research