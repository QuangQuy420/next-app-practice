'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type MessageInput = {
  message: string;
};

const ChatInput = () => {
  const { register, handleSubmit, reset } = useForm<MessageInput>();

  const onSubmit: SubmitHandler<MessageInput> = (data) => {
    console.log('Message Sent:', data.message);
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
