import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to handle user registration
export const userRegister = createAsyncThunk('user/userRegister', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/register', userData);
    return response.data;
  } catch (error) {
    const errorMessage = error.response.data.message || 'Failed to register user';
    return rejectWithValue(errorMessage);
  }
});

// Async thunk to handle user login
export const userLogin = createAsyncThunk('user/userLogin', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
    return response.data;
  } catch (error) {
    const errorMessage = error.response.data.message || 'Failed to login';
    return rejectWithValue(errorMessage);
  }
});

// Define the user slice
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    token: localStorage.getItem('token') || null,
    details: JSON.parse(localStorage.getItem('userDetails')) || null,
    isLoading: false,
    error: null
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true
      state.token = action.payload.token
      state.details = action.payload.details
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
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.details = action.payload.user;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('userDetails', JSON.stringify(action.payload.user));
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(userRegister.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userRegister.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

// Export actions
export const {login, logout } = userSlice.actions;

// Export reducer
export default userSlice.reducer;

// Define a selector to extract user data from the Redux store
export const selectUser = (state) => state.user.details;
