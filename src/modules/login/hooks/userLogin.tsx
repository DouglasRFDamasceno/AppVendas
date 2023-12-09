import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useRequest } from '../../../shared/hooks/useRequest';

export const UserLogin = () => {
  const { authRequest, errorMessage, loading, setErrorMessage } = useRequest();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    authRequest({
      email,
      password,
    });
  };

  const handleOnChangeLogin = (_event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setEmail(_event.nativeEvent.text);
  };

  const handleOnChangePassword = (_event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
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
