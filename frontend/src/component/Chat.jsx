import React, {  useState, useEffect,useRef } from "react";
import './chatbot.css'
import Navbar from "./Navbar";


export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  
  const token = localStorage.getItem("token");
  
  const userId = localStorage.getItem('userId');
  

useEffect(() => {
  console.log("Token:", token);
console.log("UserId:", userId);

  if (!userId || !token) return;

  const fetchHistory = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/chat/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ send token
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        setMessages(data);
      } else {
        console.error("Error fetching history:", data.error);
      }
    } catch (err) {
      console.error("❌ Error fetching chat history:", err);
    }
  };

  fetchHistory();
}, [userId, token]);


  // ✅ Auto scroll to bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
 
  
  

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = { role: "user", content: input };
    setMessages([...messages, newMsg]);
    setInput("");

    const res = await fetch("http://localhost:5000/api/chat", {
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
      
        
         {messages.length === 0 ? (
            <p className="placeholder">Start a conversation...</p>
          ) : (
            messages.map((msg, i) => (
              <p key={i} className={`msg ${msg.role}`}>
                <b>{msg.role === "user" ? "You" : "Moodlens"}:</b> {msg.content}
              </p>
            ))
          )}

        
        <div ref={chatEndRef} />
      


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
