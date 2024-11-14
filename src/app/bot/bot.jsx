import React, { useState } from 'react';

const Bot = ({ bot }) => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedMessage = inputMessage.trim();
    if (!trimmedMessage) return;

    setIsLoading(true);
    const newMessage = { role: 'user', content: trimmedMessage };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const outputContent = data?.output?.trim();
      if (!outputContent) {
        throw new Error('Invalid response format');
      }

      setMessages(prev => [...prev, { role: 'assistant', content: outputContent }]);
    } catch (err) {
      console.error('Chat error:', err);
      setError(
        err.message === 'Failed to fetch'
          ? 'Network error. Please check your internet connection.'
          : err.message || 'Failed to send message. Please try again.'
      );
      setShowModal(true);
    } finally {
      setIsLoading(false);
      setInputMessage('');
    }
  };

  return (
    <div className="bot-component">
      <h2>{bot.name}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>Send</button>
      </form>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>
      {showModal && <div className="error-modal">{error}</div>}
    </div>
  );
};

export default Bot;
