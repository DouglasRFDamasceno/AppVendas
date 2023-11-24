import React from 'react';
import { View } from 'react-native';

import Button from '../../../shared/components/button/button';
import Input from '../../../shared/components/input/Input';
import { Theme } from '../../../shared/themes/themes';
import { UserLogin } from '../hooks/userLogin';
import { ContainerLogin, ImageLogo } from './login.style';

const Login = () => {
  const {
    email,
    password,
    loading,
    token,
    errorMessage,
    handleLogin,
    handleOnChangeLogin,
    handleOnChangePassword,
  } = UserLogin();

  return (
    <View>
      <ContainerLogin>
        <ImageLogo resizeMode="contain" source={require('../../../assets/img/logo.png')} />
        <Input
          value={email}
          errorMessage={errorMessage}
          placeholder="Digite o e-mail"
          title="E-mail"
          onChange={handleOnChangeLogin}
        />
        <Input
          value={password}
          errorMessage={errorMessage}
          secureTextEntry
          placeholder="Digite a senha"
          margin="2% 0 0 0"
          title="Senha"
          onChange={handleOnChangePassword}
        />
        <Button
          type={Theme.buttons.buttonTheme.secondary}
          margin="8%"
          title="Login"
          loading={loading}
          onPress={handleLogin}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
