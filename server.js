const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
app.use(express.json());

const DEEPSEEK_API_URL = "https://api.deepseekai.com/chat"; // Replace with actual DeepSeek API URL
const API_KEY = "sk-e7a2f84638544ba89026839e15e536f8"; // Replace with your DeepSeek API key

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Endpoint to handle chatbot requests
app.post("/get-chatbot-response", async (req, res) => {
  try {
    const userMessage = req.body.message;
    console.log("Sending message to DeepSeek AI:", userMessage);

    // Call DeepSeek AI API
    const response = await axios.post(DEEPSEEK_API_URL, {
      message: userMessage,
      api_key: API_KEY,
    });

    console.log("Response from DeepSeek AI:", response.data);

    // Send the response back to the frontend
    res.json({ response: response.data.choices[0].message.content }); // Adjust based on DeepSeek's response structure
  } catch (error) {
    console.error("Error calling DeepSeek AI:", error);
    res.status(500).json({ error: "Failed to get chatbot response" });
  }
});

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
