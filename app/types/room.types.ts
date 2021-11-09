export interface RoomData {
  id?: string;
  title: string;
  description: string;
  picture: string;
  isPrivate: boolean;
  roomId: string;
  creator?: {
    name: string;
    profile: string;
  };
  joinedUsers?: {
    name: string;
    profile: string;
  };
  _count?: {
    joinedUsers: number;
  };
}
