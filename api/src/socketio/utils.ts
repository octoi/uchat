import { Message } from './types';

export const botMessage = (message: string): Message => {
  return {
    message,
    sender: {
      name: 'Ubot',
      isBot: true,
    },
  };
};
