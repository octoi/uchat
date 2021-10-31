import jwtDecode from 'jwt-decode';
import cookie from 'js-cookie';

export const setToken = (token: string) => {
  cookie.set('token', token);
};

export const getUserFromToken = (token: string) => {
  return new Promise((resolve, reject) => {
    const decodedData: any = jwtDecode(token);

    if (decodedData?.exp * 1000 < Date.now()) {
      reject('Expired token');
      return;
    }

    resolve(decodedData);
  });
};

export const getUserFromCookie = () => {
  return new Promise((resolve, reject) => {
    const token = cookie.get('token');

    if (!token) {
      reject('Could not find token');
      return;
    }

    getUserFromToken(token)
      .then((decodedData: any) => resolve({ ...decodedData, token }))
      .catch(reject);
  });
};
