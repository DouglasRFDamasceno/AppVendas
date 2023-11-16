import React, { useState } from 'react';
import { TextInputProps, View } from 'react-native';
import { ContainerInput, IconEye } from './input.style';

import { DisplayFlexColumn } from '../../globalStyles/globalView.style';
import { Theme } from '../../themes/themes';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';

interface InputProps extends TextInputProps {
  title?: string;
  margin?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
}

const Input = ({ secureTextEntry, errorMessage, margin, title, ...props }: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);
  const handleOnPressEye = () => {
    setCurrentSecure((current) => !current);
  };

  return (
    <DisplayFlexColumn>
      {title && (
        <Text
          customMargin={margin}
          color={Theme.colors.grayTheme.gray100}
          type={textTypes.PARAGRAPH_SMALL_BOLD}>
          {title}
        </Text>
      )}
      <View>
        <ContainerInput
          secureTextEntry={currentSecure}
          isSecure={secureTextEntry}
          isError={!!errorMessage}
          {...props}
        />
        {secureTextEntry && (
          <IconEye
            name={currentSecure ? 'eye' : 'eye-blocked'}
            size={25}
            onPress={handleOnPressEye}
          />
        )}
      </View>
      {errorMessage && (
        <Text
          customMargin={margin}
          color={Theme.colors.redTheme.red80}
          type={textTypes.PARAGRAPH_SMALL_BOLD}>
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
