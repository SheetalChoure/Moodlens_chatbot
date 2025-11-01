import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


import './signin.css'
import Navbar from './Navbar'


function Signin() {


  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

  
const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/auth/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});

const data = await res.json();
if (res.ok) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("userId", data.user._id); // ✅ Add this line
  console.log("🟢 Saved token:", data.token);
  console.log("🟢 Saved userId:", data.user._id);
  navigate("/chat");
}
else {
      alert(data.error || "Login failed");
    }
}


  return (
    <>
    <Navbar/>

  
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  
    
    </>
    
  )
}

export default Signin