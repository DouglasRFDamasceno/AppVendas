import React from 'react';

import { TouchableOpacityProps } from 'react-native';
import { Theme } from '../../themes/themes';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { ActivityIndicator, ButtonContainer, ButtonSecondary } from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({ title, type, loading, disabled, onPress, margin, ...props }: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string, textType: textTypes, text: string) => {
    return (
      <>
        <Text type={textType} color={color}>
          {text}
        </Text>
        {loading && <ActivityIndicator size="large" color={color} />}
      </>
    );
  };

  switch (type) {
    case Theme.buttons.buttonTheme.primary:
      return (
        <ButtonContainer {...props} margin={margin} onPress={handleOnPress} disabled={disabled}>
          {renderText(Theme.colors.neutralTheme.white, textTypes.BUTTON_LIGHT, title)}
        </ButtonContainer>
      );
    case Theme.buttons.buttonTheme.secondary:
    default:
      return (
        <ButtonSecondary {...props} margin={margin} onPress={handleOnPress} disabled={disabled}>
          {renderText(Theme.colors.neutralTheme.white, textTypes.BUTTON_LIGHT, title)}
        </ButtonSecondary>
      );
  }
};

export default Button;
