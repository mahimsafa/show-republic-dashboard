export enum Role {
    ADMIN = "Admin",
    USER = "User",
  }
  
  export interface UserDetails {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    role: Role;
    token: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface LoginData {
    email: string;
    password: string;
  }
  
  export interface AdminLoginData extends LoginData {
    role: Role;
  }
  
  export interface RegisterUserInput extends LoginData {
    firstName: string;
    lastName: string;
    email: string;
  }
  
  export interface UserLoginResponse {
    token: string;
    user: UserDetails;
  }
  
  export interface UserData {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    role: Role;
    token: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface ChangePassword {
    oldPassword: string;
    newPassword: string;
    userId: string;
  }
  
  export interface UpdateProfile {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    userId: string;
  }
  
  export interface UploadProfilePhoto {
    photo: string;
    userId: string;
  }
  
  export interface UserLoginResponse {
    accessToken: string;
    refreshToken: string;
  }
  