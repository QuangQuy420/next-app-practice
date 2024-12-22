'use client';

import React from 'react';

const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between bg-gray-900 p-4 text-white">
      <h3 className="text-lg font-bold">Chat Group Name</h3>
      <div className="space-x-4">
        <button className="text-gray-400 hover:text-white">🔍</button>
        <button className="text-gray-400 hover:text-white">⚙️</button>
      </div>
    </div>
  );
};

export default ChatHeader;
