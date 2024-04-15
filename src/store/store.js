import { configureStore } from '@reduxjs/toolkit';
import userReducer, { authenticateUser } from './userSlice';

const rootReducer = {
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

// Dispatch the authenticateUser action to perform authentication
store.dispatch(authenticateUser({ email: 'example', password: 'password' }));

export default store;