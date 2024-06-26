import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the backend URL
const backendURL = 'http://127.0.0.1:3000';

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
        `${'http://localhost:3000'}/api/auth/login`,
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
  async ({ firstName, lastName, email, password, birthdate, gender }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      // Make a POST request to the register endpoint
      const { data } = await axios.post(
        'http://localhost:3000/api/auth/register',
        { firstName, lastName, email, password, birthdate, gender },
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
