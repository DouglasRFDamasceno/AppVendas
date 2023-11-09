import styled from 'styled-components/native';

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background-color: blue;
  justify-content: center;
  align-items: center;
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin}` : '')}
`;

export const TextContainer = styled.Text`
  color: white;
  font-size: 22px;
`;
