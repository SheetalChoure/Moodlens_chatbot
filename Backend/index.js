import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from './routes/authRoutes.js'
import chatRoutes from './routes/chatRoutes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);



// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// ✅ Chat Schema
const chatSchema = new mongoose.Schema({
  userId:{ type: String, required: true },
  role: String, // "user" or "assistant"
  content: String,
  timestamp: { type: Date, default: Date.now },
});

const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);



app.post("/api/chat", async (req, res) => {
  try {
    const { message, userId } = req.body;

    if (!message || !userId) {
      return res.status(400).json({ error: "Message is required" });
    }

    //save user message
    await Chat.create({
      userId,
      role:'user',
      content:message,
    });


    // 🔹 Call OpenRouter API
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        // Optional headers help identify your app
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "My Chatbot System",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // or "mistralai/mistral-7b-instruct", "google/gemini-pro", etc.
        messages: [
          { role: "system", content: "You are a helpful chatbot assistant." },
          { role: "user", content: message },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("❌ OpenRouter error:", error);
      return res.status(response.status).json(error);
    }

    const data = await response.json();
    const botReply = data.choices?.[0]?.message?.content || "No response";

    //save bot reply
    await Chat.create({
      userId,
      role:"assistant",
      content:botReply,
    });


    res.json({ reply: botReply });
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({ error: error.message });
  }
});



app.get("/api/chat/:userId", async (req, res) => {
  try {
    const chats = await Chat.find({ userId: req.params.userId }).sort({ timestamp: 1 });
    res.json(chats);
  } catch (err) {
    console.error("Error fetching chat history:", err);
    res.status(500).json({ error: "Failed to fetch chat history" });
  }
});



app.listen(5000, () => console.log("🚀 Server running on port 5000"));







