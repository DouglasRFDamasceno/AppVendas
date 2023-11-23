import React from 'react';
import { View } from 'react-native';

import axios from 'axios';
import Button from '../../../shared/components/button/button';
import Input from '../../../shared/components/input/Input';
import { Theme } from '../../../shared/themes/themes';
import { ContainerLogin, ImageLogo } from './login.style';

const IP = '192.168.1.138';
const PORT = '3030';

const handleLogin = async () => {
  await axios
    .get(`http://${IP}:${PORT}/users`)
    .then((response) => {
      console.log('response');
      console.log(response.data);
    })
    .catch((error) => {
      // Bloco para capturar e tratar os erros da solicitação
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
    });

  // await axios
  //   .put('http://localhost:3001/users/1', {
  //     id: 1,
  //     name: 'Teste',
  //   })
  //   .then((response) => console.log(response.data));
};

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <ImageLogo resizeMode="contain" source={require('../../../assets/img/logo.png')} />
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
