import styled from 'styled-components/native';
import { Theme } from '../../themes/themes';

interface ButtonContainerProps {
  margin?: string;
  disabled?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  ${(props: ButtonContainerProps) =>
    props.disabled
      ? 'background-color: #aaa'
      : `background-color: ${Theme.colors.primaryTheme.primary}`};
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin}` : '')};
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin}` : '')};
  ${(props: ButtonContainerProps) =>
    props.disabled
      ? 'background-color: #aaa'
      : `background-color: ${Theme.colors.secondaryTheme.secondary}`};
`;

export const ActivityIndicator = styled.ActivityIndicator`
  padding-left: 16px;
`;
