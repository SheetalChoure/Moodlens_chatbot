import React,{useState} from 'react';
import './chatbot.css'
import Navbar from "./Navbar";


export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  
  const token = localStorage.getItem("token");
  
  const userId = localStorage.getItem('userId');

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = { role: "user", content: input };
    setMessages([...messages, newMsg]);
    setInput("");

    const res = await fetch(`${REACT_APP_SERVER_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId,
        message: input }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } else {
      alert("Error sending message");
    }
  };

  return (
    <div className="chatbot-page">
          <Navbar/>
         <h2>💬 Moodlens ChatBot</h2>
    

    <div className="chat-container">
      <div className="chat-box">
        <h3>what’s on your mind?</h3>
      
        
         {(messages.map((msg, i) => (
              <p key={i} className={`msg ${msg.role}`}>
                <b>{msg.role === "user" ? "You" : "Moodlens"}:</b> {msg.content}
              </p>
            ))
          )}

      </div>
      <form className="input-box" onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="I'm here to listen,how are you feeling?...."
        />
        <button type="submit">Send</button>
      </form>
    </div>
    </div>
  );
}
