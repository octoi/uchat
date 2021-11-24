export const GRAPHQL_ENDPOINT = 'http://localhost:5000/api';
export const SOCKET_SERVER = 'http://localhost:5000';

export enum Paths {
  register = '/account/register',
  login = '/account/login',
  app = '/',
  settings = '/account/settings',
  explore = '/app/explore',
  terms = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  newRoom = '/room/new',
  room = `/room`,
  notFound = '/404',
}

export const redirectToRoom = (roomId: string): string => {
  return `${Paths.room}/${roomId}`;
};
