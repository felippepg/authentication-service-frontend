import { jwtDecode } from 'jwt-decode';
import { api } from './api';

export const verifyCode = async (code: string, email: string) => {
  try {
    const request = await api.post('/auth/verify', {
      code,
      email,
    });

    const response = await request.data;
    if (response.hasOwnProperty('token')) {
      const { token } = response;
      const { sub } = jwtDecode(token);
      if (sub) {
        localStorage.setItem('authenticated', sub);
        window.location.href = '/';
        return {
          message: '',
        };
      } else {
        return {
          message: 'Error: Invalid token',
        };
      }
    } else {
      return {
        message: 'Error: User not valid',
      };
    }
  } catch (error: any) {
    if (error.hasOwnProperty('response')) {
      console.log(error);
      if (error.response.data != '') {
        return {
          message: error.response.data,
        };
      } else {
        return {
          message: error.message,
        };
      }
    } else {
      return {
        message: error.message,
      };
    }
  }
};
