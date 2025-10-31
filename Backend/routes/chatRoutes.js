import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Chat from "../models/Chat.js";
import fetch from "node-fetch";

dotenv.config();
const router = express.Router();

// 🧩 Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ error: "Invalid token" });
  }
};

// 🧠 Chat Route — Save messages & call OpenRouter
router.post("/", verifyToken, async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.user.userId; // ✅ Get from JWT payload

    // Save user message
    await Chat.create({ userId, role: "user", content: message });

    // 🧩 Call OpenRouter API
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful chatbot assistant." },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ OpenRouter error:", data);
      return res.status(500).json({ error: "OpenRouter API error" });
    }

    const botReply = data.choices?.[0]?.message?.content || "No response from model.";

    // Save assistant reply
    await Chat.create({ userId, role: "assistant", content: botReply });

    res.json({ reply: botReply });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: err.message });
  }
});

// 🧩 Fetch Chat History (fixed)
router.get("/:userId", verifyToken, async (req, res) => {
  try {
    const { userId } = req.params;

    // ✅ Ensure only the logged-in user can access their own chats
    if (req.user.userId !== userId) {
      return res.status(403).json({ error: "Unauthorized access" });
    }

    const chats = await Chat.find({ userId }).sort({ createdAt: 1 });
    res.json(chats);
  } catch (err) {
    console.error("Error fetching history:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;



