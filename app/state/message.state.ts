import { Message } from '@/types/socket.types';
import { createState } from '@hookstate/core';

export const messageStore = createState<Message[]>([]);

export const clearMessages = () => {
  messageStore.set([]);
};
