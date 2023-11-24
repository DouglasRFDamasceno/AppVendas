import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useSelector } from 'react-redux';
import { useRequest } from '../../../shared/hooks/useRequest';
import { RootState } from '../../../store';

export const UserLogin = () => {
  const user = useSelector((state: RootState) => state.userReducer.user);
  const { authRequest, errorMessage, loading, accessToken, setErrorMessage } = useRequest();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [token, setToken] = useState<string>('');

  const handleLogin = async () => {
    authRequest({
      email,
      password,
    });
    setToken(accessToken);
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
    token,
    user,
    handleLogin,
    handleOnChangeLogin,
    handleOnChangePassword,
  };
};
