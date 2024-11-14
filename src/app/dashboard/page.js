'use client';
import React, { useState, useEffect } from 'react';
import Bot from '../bot/bot';

const Dashboard = () => {
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch('/api/bots');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.error('Failed to fetch bots:', error);
        setError('Failed to load bots. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBots();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage and preview your chatbots with ease.</p>
        </header>
        {loading ? (
          <p className="text-center text-gray-600">Loading bots...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : bots.length > 0 ? (
          bots.map((bot) => <Bot key={bot.id} bot={bot} />)
        ) : (
          <p className="text-center text-gray-600">No bots available</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
