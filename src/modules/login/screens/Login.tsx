import React from 'react';
import { View } from 'react-native';
import Input from '../../../shared/components/input/Input';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Input />
      </ContainerLogin>
    </View>
  );
};

export default Login;
