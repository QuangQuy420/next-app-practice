import { io, Socket } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production'
  ? process.env.NEXT_PUBLIC_SOCKET_SERVER
  : 'http://localhost:4000';

// Options for Socket.IO connection (optional)
const options = {
  autoConnect: false, // Prevent auto-connection until explicitly called
};

export const socket: Socket = io(URL, options);

export const connectSocket = () => {
  if (!socket.connected) {
    socket.connect();
  }
};

export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};
