import { jwtDecode } from 'jwt-decode';
import { api } from './api';

export const login = async (email: string, password: string) => {
  try {
    const request = await api.post('/auth/login', {
      email,
      password,
    });

    const response = await request.data;
    if (response.mfaEnabled == false) {
      if (response.hasOwnProperty('token')) {
        const { token } = response;
        const { sub } = jwtDecode(token);
        if (sub) {
          localStorage.setItem('authenticated', sub);
          window.location.href = '/';
          return {
            message: '',
            verifyCode: false,
          };
        } else {
          return {
            message: 'Error: Invalid token',
            verifyCode: false,
          };
        }
      } else {
        return {
          message: 'Error: User not valid',
          verifyCode: false,
        };
      }
    }
    return {
      message: '',
      verifyCode: true,
    };
  } catch (error: any) {
    if (error.hasOwnProperty('response')) {
      console.log(error);
      if (error.response.data != '') {
        return {
          message: error.response.data,
          verifyCode: false,
        };
      } else {
        return {
          message: error.message,
          verifyCode: false,
        };
      }
    } else {
      return {
        message: error.message,
        verifyCode: false,
      };
    }
  }
};
