import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to handle user authentication
export const authenticateUser = createAsyncThunk(
  'user/authenticateUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, { username, password });
      return res.data;
    } catch (error) {
      console.error('Error authenticating user:', error);
      return rejectWithValue(error);
    }
  }
);

// Async thunk to handle user registration
export const requestRegister = createAsyncThunk(
  'user/requestRegister',
  async ({ firstName, lastName, email, password, navigate }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, { firstName, lastName, email, password });
      navigate('/login');
      return res.data;
    } catch (error) {
      console.error('Error registering user:', error);
      return rejectWithValue(error);
    }
  }
);

// Define the user slice
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    token: localStorage.getItem('token') || null,
    details: localStorage.getItem('userDetails') || null,
    isLoading: false,
    error: null
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.details = action.payload.details;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('userDetails', JSON.stringify(action.payload.details));
    },
    logout: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('userDetails');
      state.isAuthenticated = false;
      state.token = null;
      state.details = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.details = action.payload.user;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('userDetails', JSON.stringify(action.payload.user));
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(requestRegister.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestRegister.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(requestRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

// Export actions
export const { login, logout } = userSlice.actions;

// Export reducer
export default userSlice.reducer;

// Define a selector to extract user data from the Redux store
export const selectUser = (state) => state.user.details;
