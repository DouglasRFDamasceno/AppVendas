import { useState } from 'react';
import { tokenTokenReducer } from '../../store/reducers/tokenReducer/tokenTokenReducer';
import { userUserReducer } from '../../store/reducers/userReducer/userUserReducer';
import { ConnectionAPIPost } from '../functions/connection/connectionAPI';
import { RequestLogin } from '../types/requestLogin';
import { ReturnLogin } from './returnLogin';

const IP = '192.168.1.138';
const PORT = '3030';

export const useRequest = () => {
  const { setUser } = userUserReducer();
  const { setToken } = tokenTokenReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);

    await ConnectionAPIPost<ReturnLogin>(`http://${IP}:${PORT}/login`, body)
      .then((result) => {
        setUser(result.user);
        setToken(result.accessToken);
      })
      .catch(() => {
        setErrorMessage('Usuário e senha inválida.');
      });

    setLoading(false);
  };

  return {
    loading,
    errorMessage,
    setErrorMessage,
    authRequest,
  };
};
