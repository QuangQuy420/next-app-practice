'use client';

import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { connectSocket, disconnectSocket, socket } from '../socket';

type MessageInput = {
  message: string;
};

const ChatInput = () => {
  const { register, handleSubmit, reset } = useForm<MessageInput>();
  const [webSocket, setWebSocket] = useState<WebSocket>(null as unknown as WebSocket)

  useEffect(() => {
    connectSocket();

    socket.on('message', (message) => {
      console.log('Received message:', message);
    });

    return () => {
      socket.off('message');
      disconnectSocket();
    };
  }, []);

  const sendMessage = (message: string) => {
    socket.emit('sendMessage', message);
  };

  const onSubmit: SubmitHandler<MessageInput> = (data) => {
    sendMessage(data.message);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center space-x-4 bg-gray-900 p-4"
    >
      <input
        {...register('message', { required: true })}
        type="text"
        placeholder="Type your message..."
        className="flex-1 rounded-lg bg-gray-800 p-2 text-white focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
