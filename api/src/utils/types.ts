export interface loginArgs {
  email: string;
  password: string;
}

export interface registerArgs {
  name: string;
  email: string;
  profile: string;
  password: string;
}

export interface updateArgs {
  id: number;
  ogEmail: string;
  name: string;
  email: string;
  profile: string;
  password: string;
  isNewPassword: boolean;
}

export interface createRoomArgs {
  title: string;
  description: string;
  isPrivate: boolean;
}
