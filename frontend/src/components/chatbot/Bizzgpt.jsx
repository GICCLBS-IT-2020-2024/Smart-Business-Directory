import { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

const BizzGPT = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm BizzAI, a business counseling chatbot. Please provide your name so I can offer personalized advice.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/chat", {
        message: input,
      });
      const botMessage = { text: response.data.text, sender: "bot" };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages([
        ...messages,
        userMessage,
        { text: "Error getting response from chatbot.", sender: "bot" },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="chatbot-container" id="scrollbar1">
      <div className="sticky-header">
        <img src="./img/robot.png" alt="GPT Icon" className="gpt-icon" />
        <h2 className="bizzgpt-name">BizzGPT</h2>
      </div>

      <div className="padding">
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-container ${
                message.sender === "user" ? "user-container" : "bot-container"
              }`}
            >
              {message.sender === "user" && (
                <img
                  src="./defaultAvatar.jpeg"
                  alt="User Avatar"
                  className="avatar"
                />
              )}
              {message.sender === "bot" && (
                <img
                  src="./img/robot.png"
                  alt="Bot Avatar"
                  className="avatar"
                />
              )}
              <div
                className={`message ${
                  message.sender === "user" ? "user-message" : "bot-message"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="message-container bot-container">
              <div className="loader"></div>
            </div>
          )}
        </div>

        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button className="send-button" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default BizzGPT;
