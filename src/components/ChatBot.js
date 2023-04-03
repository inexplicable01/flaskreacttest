import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (message) => {
    setMessages([...messages, { type: 'user', content: message }]);

    const response = await fetch('https://your-chatgpt-api-endpoint.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    setMessages([...messages, { type: 'bot', content: data.response }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    if (message) {
      sendMessage(message);
      e.target.message.value = '';
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chatbot-message chatbot-${message.type}`}>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          placeholder="Type your message..."
          autoComplete="off"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;