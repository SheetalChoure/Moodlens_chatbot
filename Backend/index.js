import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fetch from "node-fetch";

import authRoutes from "./routes/authRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config({ path: "./.env" });
console.log("🔑 OpenRouter key:", process.env.OPENROUTER_API_KEY ? "Loaded ✅" : "❌ Missing");

const app = express();

// ✅ Correct CORS setup
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://moodlenschatbot.netlify.app",
    "https://moodlens-chatbot.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

// ✅ Root test route
app.get("/", (req, res) => res.json({ activeStatus: true }));

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err.message));

// ✅ Chat Schema
const chatSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  role: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
});

const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);

// ✅ Chat routes
app.post("/api/chat", async (req, res) => {
  try {
    const { message, userId } = req.body;
    if (!message || !userId)
      return res.status(400).json({ error: "Message is required" });

    await Chat.create({ userId, role: "user", content: message });
  

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://moodlenschatbot.netlify.app",
        "X-Title": "Moodlens Chatbot",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful chatbot assistant." },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();
    const botReply = data.choices?.[0]?.message?.content || "No response";
    await Chat.create({ userId, role: "assistant", content: botReply });

    res.json({ reply: botReply });


  } catch (err) {
    console.error("❌ Server error:", err);
    res.status(500).json({ error: err.message });


  }
});

app.get("/api/chat/:userId", async (req, res) => {
  try {
    const chats = await Chat.find({ userId: req.params.userId }).sort({ timestamp: 1 });
    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch chat history" });
  }
});

// ✅ Export for Vercel
export default app;








