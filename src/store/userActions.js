export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';

export const requestLogin = (userData) => ({
  type: LOGIN_REQUEST,
  payload: userData,
});

export const registerUser = (userData) => ({
  type: REGISTER_REQUEST,
  payload: userData,
});
