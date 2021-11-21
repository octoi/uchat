import { AppSocket } from '@/types/socket.types';
import { createState } from '@hookstate/core';

export const socketStore = createState<null | AppSocket>(null);
