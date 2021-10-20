// Login user arguments
export interface loginArgs {
  email: string;
  password: string;
}

// Responses for any user request
export interface userResponse {
  id: number;
  token: string;
  name: string;
  email: string;
  profile: string;
}
