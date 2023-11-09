import React from 'react';

import { TouchableOpacityProps } from 'react-native';
import { Theme } from '../../themes/themes';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { ButtonContainer } from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ title, margin, ...props }: ButtonProps) => {
  return (
    <ButtonContainer margin={margin} {...props}>
      <Text type={textTypes.BUTTON} color={Theme.colors.neutralTheme.white}>
        {title}
      </Text>
    </ButtonContainer>
  );
};

export default Button;
