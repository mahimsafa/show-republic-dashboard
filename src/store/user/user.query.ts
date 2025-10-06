import {
    getAuthUser,
    registerUser,
    loginUser,
    logoutUser
  } from '@/services/routes/user.route';
  import { useQuery, useMutation } from '@tanstack/react-query';
  import { LoginData, RegisterUserInput, UserData, UserLoginResponse } from '@/services/types/user.types';
  
  // Fetch authenticated user details
  export const useGetAuthUser = (headers?: Record<string, string>) => {
    return useQuery<UserData>({
      queryKey: ['auth-user'],
      queryFn: () => getAuthUser(headers),
      enabled: !!headers, // Only fetch if headers are present
    });
  };
  
  // Mutation for registering a new user
  export const useRegisterUser = () => {
    return useMutation<UserData, Error, RegisterUserInput>({
      mutationFn: (payload: RegisterUserInput) => registerUser(payload),
    });
  };
  
  // Mutation for logging in a user
  export const useLoginUser = () => {
    return useMutation<UserLoginResponse, Error, LoginData>({
      mutationFn: (loginData: LoginData) => loginUser(loginData),
    });
  };
  
  // Mutation for logging out a user
  export const useLogoutUser = () => {
    return useMutation<void, Error>({
      mutationFn: () => logoutUser(),
    });
  };
  