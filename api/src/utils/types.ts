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

export interface userResponse {
  id: number;
  token: string;
  name: string;
  email: string;
  profile: string;
}
