import { useEffect } from 'react';
import { api } from '../../../services/api';

export const Login = () => {
  useEffect(() => {
    const connect = async () => {
      const request = await api.get('/demo');
      const response = await request.data;
      console.log(response);
    };

    connect();
  }, []);
  return (
    <>
      <h1>Login</h1>
      <form></form>
    </>
  );
};
