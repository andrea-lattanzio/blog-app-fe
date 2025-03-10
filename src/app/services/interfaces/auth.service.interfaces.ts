export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface RegisterRequestBody {
  email: string;
  password: string;
}

export interface LoginResponseBody {
  token: string;
  user: User;
}

export interface User {
  username: string;
  email: string;
  created: string;
}