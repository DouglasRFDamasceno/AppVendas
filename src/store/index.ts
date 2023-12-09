import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './reducers/tokenReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: { userReducer, tokenReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
