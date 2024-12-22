'use client';

import React from 'react';

const ChatRightSidebar = () => {
  return (
    <div className="w-1/4 bg-gray-800 p-4 text-white">
      <h2 className="mb-4 text-lg font-bold">Conversations</h2>
      <ul className="space-y-2">
        <li className="cursor-pointer rounded p-2 hover:bg-gray-700">
          Chat Group 1
        </li>
        <li className="cursor-pointer rounded p-2 hover:bg-gray-700">
          Chat Group 2
        </li>
        <li className="cursor-pointer rounded p-2 hover:bg-gray-700">
          Chat Group 3
        </li>
        <li className="cursor-pointer rounded p-2 hover:bg-gray-700">
          Chat Group 4
        </li>
      </ul>
    </div>
  );
};

export default ChatRightSidebar;
