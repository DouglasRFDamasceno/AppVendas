import React from 'react';

import { TouchableOpacityProps } from 'react-native';
import { Theme } from '../../themes/themes';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { ButtonContainer, ButtonSecondary } from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
}

const Button = ({ title, type, margin, ...props }: ButtonProps) => {
  switch (type) {
    case Theme.buttons.buttonTheme.primary:
      return (
        <ButtonContainer margin={margin} {...props}>
          <Text type={textTypes.BUTTON_LIGHT} color={Theme.colors.neutralTheme.white}>
            {title}
          </Text>
        </ButtonContainer>
      );
    case Theme.buttons.buttonTheme.secondary:
    default:
      return (
        <ButtonSecondary margin={margin} {...props}>
          <Text type={textTypes.BUTTON_LIGHT} color={Theme.colors.neutralTheme.white}>
            {title}
          </Text>
        </ButtonSecondary>
      );
  }
};

export default Button;
