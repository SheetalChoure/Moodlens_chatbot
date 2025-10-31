import React from 'react';
import './footer.css';

function Footer(){
  return (
    <footer className="chatbot-footer">
      <div className="footer-sections">
        
        {/* About Section */}
        <div className="footer-section">
          <h4>About</h4>
          <p>
            This chatbot is designed to offer emotional support and early detection guidance for those experiencing symptoms of depression.
            It is not a replacement for professional help.
          </p>
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h4>Helpful Resources</h4>
          <ul>
            <li><a href="https://www.who.int/mental_health" target="_blank" rel="noopener noreferrer">WHO Mental Health</a></li>
            <li><a href="https://www.nimh.nih.gov/health/topics/depression" target="_blank" rel="noopener noreferrer">NIMH on Depression</a></li>
            <li><a href="/blog">Self-Care Tips</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact & Support</h4>
          <p>Email: <a href="mailto:moodlens.com">moodlens@chatbothelp.com</a></p>
          <p>Need immediate help? <a href="/">Click here</a></p>
        </div>

       
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Blog">Blog</a></li>
            <li><a href="/Research">Research</a></li>
            <li><a href="/About">About Us</a></li>
          </ul>
        </div>
      </div>

      {/* Crisis Warning */}
      <div className="crisis-warning">
        <p>
          ⚠️ If you are in crisis or thinking about harming yourself, please contact emergency services or a suicide prevention hotline in your area.
        </p>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Depression Detection Chatbot. All rights reserved.</p>
        <p>Your privacy is respected. No sensitive data is stored.</p>
      </div>
    </footer>
  );
};

export default Footer;
