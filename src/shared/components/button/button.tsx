import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, TextContainer } from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ title, margin, ...props }: ButtonProps) => {
  return (
    <ButtonContainer margin={margin} {...props}>
      <TextContainer>{title}</TextContainer>
    </ButtonContainer>
  );
};

export default Button;
