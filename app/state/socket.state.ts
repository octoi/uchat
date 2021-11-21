import { createState } from '@hookstate/core';
import { Socket } from 'socket.io-client';

export const socketStore = createState<null | Socket>(null);
