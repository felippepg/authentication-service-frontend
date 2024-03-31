import { jwtDecode } from 'jwt-decode';

export const verifyToken = async (response: any) => {
  if (response.hasOwnProperty('token')) {
    const { token } = response;
    const { sub } = jwtDecode(token);
    if (sub) {
      return {
        message: 'Success: User created',
        success: true,
        sub: sub,
      };
    } else {
      return {
        message: 'Error: Invalid token',
        success: false,
        sub: null,
      };
    }
  } else {
    return {
      message: 'Error: User not valid',
      success: false,
      sub: null,
    };
  }
};
