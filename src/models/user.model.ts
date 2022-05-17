export interface User {
  _id: string;
  username: string;
  email: string;
  profilePic: string;
  isAdmin: boolean;
  createdAt: Date;
  password?: string;
  updatedAt: Date;
  __v: number;
  accessToken: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
