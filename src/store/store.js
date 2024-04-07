import { configureStore } from '@reduxjs/toolkit';
import userReducer, { authenticateUser } from './userSlice'; // Import authenticateUser as named export

const rootReducer = {
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

// Dispatch the authenticateUser action to perform authentication
store.dispatch(authenticateUser({ username: 'example', password: 'password' }));

export default store;
