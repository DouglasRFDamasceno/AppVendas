import styled from 'styled-components/native';

interface TextContainerProps {
  color?: string;
  fontSize: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Regular' | 'Poppins-Light';
}

export const TextContainer = styled.Text<TextContainerProps>`
  font-size: 22px;
  ${(props: TextContainerProps) => (props.color ? `color: ${props.color}` : '')};
  font-size: ${(props: TextContainerProps) => props.fontSize};
  font-family: ${(props: TextContainerProps) => props.fontFamily};
`;
