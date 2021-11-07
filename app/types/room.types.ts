export interface GetRoomDataResponse {
  id: string;
  title: string;
  description: string;
  isPrivate: boolean;
  roomId: string;
  creator: {
    email: string;
  };
}
