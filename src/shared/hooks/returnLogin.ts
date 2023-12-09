import { TokenType } from '../types/tokenType';
import { UserType } from '../types/userType';

export interface ReturnLogin {
  accessToken: TokenType;
  user: UserType;
}
