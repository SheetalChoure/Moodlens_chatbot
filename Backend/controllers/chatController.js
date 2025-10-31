// import axios from "axios";
// import Chat from "../models/Chat.js";

// export const chatWithGemini = async (req, res) => {
//   try {
//     const { message } = req.body;

//     // Send request to Gemini API
//     const geminiRes = await axios.post(
//       "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
//       {
//         model: "gemini-2.5-flash",
//         messages: [
//           { role: "system", content: "You are a helpful assistant chatbot." },
//           { role: "user", content: message },
//         ],
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
//         },
//       }
//     );

//     const botReply = geminiRes.data.choices[0].message.content;

//     // Save chat to MongoDB
//     const newChat = new Chat({ userMessage: message, botReply });
//     await newChat.save();

//     res.status(200).json({ reply: botReply });
//   } catch (error) {
//     console.error("❌ Gemini API error:", error.response?.data || error.message);
//     res.status(500).json({ error: error.response?.data || error.message });
//   }
// };







// import axios from "axios";
// import Chat from "../models/Chat.js";
// import dotenv from "dotenv";
// dotenv.config();

// export const chatWithGemini = async (req, res) => {
//   try {
//     const { message } = req.body;
//     if (!message) {
//       return res.status(400).json({ error: "Message is required" });
//     }

//     // ✅ Correct endpoint
//     const url = "https://generativelanguage.googleapis.com/v1beta/chat/completions";

//     // ✅ Proper headers: use Authorization Bearer token
//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
      

//     };

//     const body = {
//       model: "gemini-1.5-flash",
//       messages: [{ role: "user", content: message }],
//     };

//     const geminiRes = await axios.post(url, body, { headers });

//     const botReply =
//       geminiRes.data?.choices?.[0]?.message?.content ||
//       "I couldn’t get a response.";

//     await Chat.create({ userMessage: message, botResponse: botReply });

//     res.json({ reply: botReply });
//   } catch (error) {
//     console.error("❌ Gemini API error:", error.response?.data || error.message);
//     res.status(500).json({
//       error: error.response?.data?.error?.message || "Internal server error",
//     });
//   }
// };






// import axios from "axios";
// import Chat from "../models/Chat.js";
// import dotenv from "dotenv";
// dotenv.config();

// export const chatWithGemini = async (req, res) => {
//   try {
//     const { message } = req.body;
//     if (!message) {
//       return res.status(400).json({ error: "Message is required" });
//     }

//     const url = `https://generativelanguage.googleapis.com/v1beta/chat/completions?key=${process.env.GEMINI_API_KEY}`;

//     const body = {
//       model: "gemini-1.5-flash",
//       messages: [
//         { role: "user", content: message }
//       ],
//       // you can also include other generation settings if needed
//     };

//     const geminiRes = await axios.post(url, body, {
//       headers: { "Content-Type": "application/json" },
//     });

//     const botReply = geminiRes.data?.choices?.[0]?.message?.content || 
//       "I couldn’t get a response.";

//     await Chat.create({ userMessage: message, botResponse: botReply });

//     res.json({ reply: botReply });
//   } catch (error) {
//     console.error("❌ Gemini API error:", error.response?.data || error.message);
//     res.status(500).json({
//       error: error.response?.data?.error?.message || "Internal server error",
//     });
//   }
// };










// import axios from "axios";
// import Chat from "../models/Chat.js";
// import dotenv from "dotenv";

// dotenv.config();

// export const chatWithGemini = async (req, res) => {
//   try {
//     const { message } = req.body;
//     if (!message) {
//       return res.status(400).json({ error: "Message is required" });
//     }

//     // Gemini API call
//     // const response = await axios.post(
//     //   `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
//     //   {
//     //     contents: [{ parts: [{ text: message }] }],
//     //   },
//     //   { headers: { "Content-Type": "application/json" } }
//     // );


//     const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
//     const response = await axios.post(
//     url,
//     { contents: [{ parts: [{ text: message }] }] },
//     { headers: { "Content-Type": "application/json" } }
//     );


//     const botReply =
//       response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//       "I'm not sure what you mean.";

//     // Save to MongoDB
//     await Chat.create({ userMessage: message, botResponse: botReply });

//     res.json({ reply: botReply });
//   } catch (error) {
//     console.error("Gemini API error:", error.response?.data || error.message);
//     res.status(500).json({
//       error: error.response?.data?.error?.message || "Server error",
//     });
//   }
// };













// import axios from "axios";
// import Chat from "../models/Chat.js";

// export const chatWithGemini = async (req, res) => {
//   try {
//     const { message } = req.body;

//     // Send user message to Gemini API
//     const geminiResponse = await axios.post(
//       "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
//       {
//         contents: [{ parts: [{ text: message }] }],
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "x-goog-api-key": process.env.GEMINI_API_KEY,
//         },
//       }
//     );

//     const botReply =
//       geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//       "Sorry, I couldn’t understand that.";

//     // Save chat to MongoDB
//     const newChat = new Chat({ userMessage: message, botResponse: botReply });
//     await newChat.save();

//     res.json({ reply: botReply });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error communicating with Gemini API" });
//   }
// };
