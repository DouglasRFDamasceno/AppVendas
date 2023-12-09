import { useDispatch } from 'react-redux';
import { setAccessTokenAction } from '.';
import { TokenType } from '../../../shared/types/tokenType';
import { useAppSelector } from '../../hooks';

export const tokenTokenReducer = () => {
  const dispatch = useDispatch();
  const { accessToken } = useAppSelector((state) => state.tokenReducer);
  const setToken = (currentToken: TokenType) => {
    dispatch(setAccessTokenAction(currentToken));
  };

  return {
    accessToken,
    setToken,
  };
};
