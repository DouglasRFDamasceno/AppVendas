import React, { useMemo } from 'react';

import { TextProps as TextPropsNative } from 'react-native/types';
import { TextContainer } from './text.style';
import { textTypes } from './textTypes';

interface TextProps extends TextPropsNative {
  color?: string;
  type: textTypes;
}

const Text = ({ type, color, ...props }: TextProps) => {
  const handleFontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE:
        return '32px';
      case textTypes.BUTTON:
        return '22px';
      default:
        return '16px';
    }
  }, [type]);

  return <TextContainer fontSize={handleFontSize} color={color} {...props} />;
};

export default Text;
