'use client';

import React from 'react';

const ChatMessages = () => {
  const messages = [
    { sender: 'User1', text: 'Hello!', time: '10:00' },
    { sender: 'User2', text: 'Hi there!', time: '10:01' },
    { sender: 'User1', text: 'How are you?', time: '10:02' },
  ];

  return (
    <div className="flex-1 space-y-4 overflow-y-auto bg-gray-700 p-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.sender === 'User1' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-sm rounded-lg p-3 ${
              message.sender === 'User1'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-900'
            }`}
          >
            <p>{message.text}</p>
            <span className="mt-1 block text-xs text-gray-400">
              {message.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
