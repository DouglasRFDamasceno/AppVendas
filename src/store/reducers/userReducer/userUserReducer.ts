import { useDispatch } from 'react-redux';
import { setUserAction } from '.';
import { UserType } from '../../../shared/types/userType';
import { useAppSelector } from '../../hooks';

export const userUserReducer = () => {
  const dispatch = useDispatch();

  const { user } = useAppSelector((state) => state.userReducer);
  const setUser = (currentUser: UserType) => {
    dispatch(setUserAction(currentUser));
  };

  return {
    user,
    setUser,
  };
};
