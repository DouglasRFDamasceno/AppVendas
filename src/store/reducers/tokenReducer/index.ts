import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TokenType } from '../../../shared/types/tokenType';

interface tokenStore {
  accessToken?: TokenType;
}
const initialState: tokenStore = {
  accessToken: undefined,
};

export const tokenSlice = createSlice({
  name: 'tokenReducer',
  initialState,
  reducers: {
    setAccessTokenAction: (state, action: PayloadAction<TokenType>) => {
      state.accessToken = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccessTokenAction } = tokenSlice.actions;

export default tokenSlice.reducer;
