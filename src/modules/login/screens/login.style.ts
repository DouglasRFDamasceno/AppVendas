import styled from 'styled-components/native';
import { Theme } from '../../../shared/themes/themes';

export const ContainerLogin = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.colors.neutralTheme.white};
  padding: 16px;
`;

export const ImageLogo = styled.Image`
  width: 100%;
  height: 50%;
`;
