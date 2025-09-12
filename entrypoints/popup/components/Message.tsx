import React from 'react';

interface MessageProps {
  message: string;
  type: 'success' | 'error';
}

export const Message: React.FC<MessageProps> = ({ message, type }) => {
  if (!message) return null;
  
  return (
    <div className={`message ${type}`}>
      {message}
    </div>
  );
};