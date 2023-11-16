import styled from 'styled-components/native';
import { Theme } from '../../themes/themes';

export const ContainerInput = styled.TextInput`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  margin: 1rem;
  background-color: ${Theme.colors.neutralTheme.white};
  color: #888;
  font-size: 20px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${Theme.colors.grayTheme.gray80};
`;
