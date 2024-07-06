export const getMessages = async () => {
  const response = await fetch('/api/messages');
  return response.json();
};

export const sendMessage = async (messageText) => {
  const response = await fetch('/api/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: messageText }),
  });
  return response.json();
};

// export default {
//   getMessages,
//   sendMessage,
// };
