import { gql } from '@apollo/client';

export const CREATE_ROOM = gql`
  mutation (
    $title: String
    $description: String
    $picture: String
    $isPrivate: Boolean
  ) {
    createRoom(
      title: $title
      description: $description
      picture: $picture
      isPrivate: $isPrivate
    ) {
      roomId
    }
  }
`;

export const JOIN_ROOM = gql`
  mutation ($roomId: String) {
    joinRoom(roomId: $roomId) {
      roomId
    }
  }
`;
