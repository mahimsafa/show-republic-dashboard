/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from 'js-cookie';
import { get, post } from '../index';
import {
  LoginData,
  RegisterUserInput,
  UserData,
  UserLoginResponse,
} from '../types/user.types';

export const getAuthUser = async (
  headers?: Record<string, string>
): Promise<UserData> => {
  return get('users/me', headers).then((data) => data as UserData);
};


export const registerUser = async (
  payload: RegisterUserInput
): Promise<UserData> => {
  return post('users/public', payload).then((data) => data as UserData);
};

export const loginUser = async (
  loginData: LoginData
): Promise<UserLoginResponse | any> => {
  const data = (await post('users/login', loginData)) as UserLoginResponse;
  if (data?.token) {
    Cookies.set('token', data.token);
  }
  if (data?.refreshToken) {
    Cookies.set('refreshToken', data.refreshToken);
  }
  return data as UserLoginResponse;
};

export const logoutUser = async (): Promise<void> => {
  return get('users/logout').then(() => {
    Cookies.remove('token');
    Cookies.remove('refreshToken');
  });
};
