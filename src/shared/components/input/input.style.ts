import styled from 'styled-components/native';
import { Theme } from '../../themes/themes';
import { Icon } from '../icon/icon';

interface ContainerInputProps {
  isError?: boolean;
  isSecure?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  margin: 1rem;
  background-color: ${Theme.colors.neutralTheme.white};
  color: #888;
  padding-right: ${(props: ContainerInputProps) => (props.isSecure ? '60px' : '16px')};
  font-size: 20px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${(props: ContainerInputProps) =>
    props.isError ? Theme.colors.redTheme.red80 : Theme.colors.grayTheme.gray80};
`;

export const IconEye = styled(Icon)`
  right: 0;
  position: absolute;
  top: 25%;
  right: 4%;
`;
