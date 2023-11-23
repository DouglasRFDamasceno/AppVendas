import React, { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData, View } from 'react-native';

import axios from 'axios';
import Button from '../../../shared/components/button/button';
import Input from '../../../shared/components/input/Input';
import { Theme } from '../../../shared/themes/themes';
import { ContainerLogin, ImageLogo } from './login.style';

const IP = '192.168.1.138';
const PORT = '3030';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLogin = async () => {
    setLoading(true);
    console.log(email, password);

    await axios
      .post(`http://${IP}:${PORT}/login`, {
        email,
        password,
      })
      .then((response) => {
        console.log('Usuário autenticado');
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response) {
          // O servidor respondeu com um status de erro (por exemplo, 404, 500)
          console.log('Erro de resposta do servidor:', error.response.data);
        } else if (error.request) {
          // A solicitação foi feita, mas não houve resposta do servidor
          console.log('Erro de requisição:', error.request);
        } else {
          // Ocorreu um erro durante o processamento da solicitação
          console.log('Erro:', error.message);
        }
        console.log('Configuração do erro:', error.config);

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

  return (
    <View>
      <ContainerLogin>
        <ImageLogo resizeMode="contain" source={require('../../../assets/img/logo.png')} />
        <Input
          errorMessage="E-mail inválido"
          placeholder="Digite o e-mail"
          title="E-mail"
          onChange={handleOnChangeLogin}
        />
        <Input
          secureTextEntry
          errorMessage={errorMessage}
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
