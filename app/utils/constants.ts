export const GRAPHQL_ENDPOINT = 'http://localhost:5000/api';

export enum Paths {
  register = '/account/register',
  login = '/account/login',
  app = '/app',
  settings = '/account/settings',
  explore = '/app/explore',
  terms = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  newRoom = '/room/new',
  room = `/room`,
}

export const redirectToRoom = (roomId: string): string => {
  return `${Paths.room}/${roomId}`;
};
