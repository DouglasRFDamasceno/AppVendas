import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { ConnectionAPIPost } from '../../../shared/functions/connection/connectionAPI';

const IP = '192.168.1.138';
const PORT = '3030';

export const UserLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLogin = async () => {
    setLoading(true);
    setErrorMessage('');
    console.log(email, password);

    await ConnectionAPIPost(`http://${IP}:${PORT}/login`, {
      email,
      password,
    }).catch(() => {
      setErrorMessage('Usuário e senha inválida.');
    });

    setLoading(false);
  };

  const handleOnChangeLogin = (_event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(_event.nativeEvent.text);
  };

  const handleOnChangePassword = (_event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPassword(_event.nativeEvent.text);
  };

  return {
    email,
    password,
    loading,
    errorMessage,
    handleLogin,
    handleOnChangeLogin,
    handleOnChangePassword,
  };
};
