import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the backend URL
const backendURL = 'http://127.0.0.1:5000';

// Async thunk for user login
export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      // Make a POST request to the login endpoint
      const { data } = await axios.post(
        `${'http://localhost:3000'}/login`,
        { email, password },
        config
      );

      // Return the data received from the server
      return data;
    } catch (error) {
      // Handle errors and reject with error message
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Async thunk for user registration
export const userRegister = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      // Make a POST request to the register endpoint
      const { data } = await axios.post(
        `${'http://localhost:3000'}/api/user/register`,
        { name, email, password },
        config
      );

      // Return the data received from the server
      return data;
    } catch (error) {
      // Handle errors and reject with error message
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
