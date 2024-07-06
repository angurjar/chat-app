let socket;

export const connectSocket = (url) => {
  socket = new WebSocket(url);
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.close();
  }
};

export const sendMessage = (messages) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(messages));
  }
};

export const onMessageReceived = (callback) => {
  if (socket) {
    socket.onmessage = (event) => {
      const messages = JSON.parse(event.data);
      callback(messages);
    };
  }
};
