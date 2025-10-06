import Cookies from 'js-cookie';

export const setAuthTokens = (token: string) => {
  Cookies.set('admin_token', token, { expires: 1 }); // Expires in 1 day
};

export const getAuthToken = () => {
  return Cookies.get('admin_token');
};

export const removeAuthTokens = () => {
  Cookies.remove('admin_token');
  Cookies.remove('admin_refreshToken');
};
