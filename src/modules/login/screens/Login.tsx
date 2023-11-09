import React from 'react';
import { View } from 'react-native';

import Button from '../../../shared/components/button/button';
import Input from '../../../shared/components/input/Input';
import { ContainerLogin } from '../styles/login.style';

const handleLogin = () => {
  console.log('Login');
};

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Input />
        <Button margin="8px" title="Login" onPress={handleLogin} />
      </ContainerLogin>
    </View>
  );
};

export default Login;
