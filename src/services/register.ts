import { api } from './api';

export const register = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  mfaEnabled: boolean
) => {
  try {
    const request = await api.post('/auth/register', {
      firstname,
      lastname,
      email,
      password,
      mfaEnabled,
    });

    const response = request.data;
    return {
      message: '',
      data: response,
    };
  } catch (error: any) {
    if (error.response) {
      if (error.response.data !== '') {
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
