import { useState } from 'react';
import { ConnectionAPIPost } from '../functions/connection/connectionAPI';
import { RequestLogin } from '../types/requestLogin';
import { ReturnLogin } from './returnLogin';

const IP = '192.168.1.138';
const PORT = '3030';

export const useRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [accessToken, setAccessToken] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);

    await ConnectionAPIPost<ReturnLogin>(`http://${IP}:${PORT}/login`, body)
      .then((result) => {
        setAccessToken(result.accessToken);
      })
      .catch(() => {
        setErrorMessage('Usuário e senha inválida.');
      });

    setLoading(false);
  };

  return {
    loading,
    errorMessage,
    accessToken,
    setErrorMessage,
    authRequest,
  };
};
