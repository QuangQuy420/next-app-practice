import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';

const ChatPage = () => {
  return (
    <div className="flex flex-1 flex-col">
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default ChatPage;
