import React from 'react';
import { View } from 'react-native';

import Button from '../../../shared/components/button/button';
import Input from '../../../shared/components/input/Input';
import { Theme } from '../../../shared/themes/themes';
import { ContainerLogin } from './login.style';

const handleLogin = () => {
  console.log('Login');
};

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Input errorMessage="E-mail inválido" placeholder="Digite o e-mail" title="E-mail" />
        <Input
          secureTextEntry
          errorMessage="Senha inválida"
          placeholder="Digite a senha"
          margin="2% 0 0 0"
          title="Senha"
        />
        <Button
          type={Theme.buttons.buttonTheme.secondary}
          margin="8%"
          title="Login"
          // disabled
          onPress={handleLogin}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
