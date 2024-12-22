import React from 'react';
import ChatLeftSidebar from './components/ChatLeftSidebar';
import ChatHeader from './components/ChatHeader';
import ChatRightSidebar from './components/ChatRightSidebar';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <ChatHeader />
      <div className="flex flex-1">
        <ChatLeftSidebar />
        {children}
        <ChatRightSidebar />
      </div>
    </div>
  );
}
