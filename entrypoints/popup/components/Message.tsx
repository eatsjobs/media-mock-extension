import React from 'react';

interface MessageProps {
  message: string;
  type: 'success' | 'error';
}

export const Message: React.FC<MessageProps> = ({ message, type }) => {
  if (!message) return null;
  
  return (
    <div className={`mm-message mm-${type}`}>
      {message}
    </div>
  );
};