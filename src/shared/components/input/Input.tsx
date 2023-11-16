import React from 'react';
import { TextInputProps } from 'react-native';
import { ContainerInput } from './input.style';

import { DisplayFlexColumn } from '../../globalStyles/globalView.style';
import { Theme } from '../../themes/themes';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';

interface InputProps extends TextInputProps {
  title?: string;
  margin?: string;
}

const Input = ({ margin, title, ...props }: InputProps) => {
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
      <ContainerInput {...props} />
    </DisplayFlexColumn>
  );
};

export default Input;
