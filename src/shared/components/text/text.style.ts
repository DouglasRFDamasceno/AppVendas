import styled from 'styled-components/native';

interface TextContainerProps {
  color?: string;
  fontSize: string;
  customMargin?: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Regular' | 'Poppins-Light';
}

export const TextContainer = styled.Text<TextContainerProps>`
  font-size: 30px;
  ${(props: TextContainerProps) => (props.color ? `color: ${props.color};` : '')};
  ${(props: TextContainerProps) => (props.customMargin ? `margin: ${props.customMargin};` : '')};
  font-size: ${(props: TextContainerProps) => props.fontSize};
  font-family: ${(props: TextContainerProps) => props.fontFamily};
`;
