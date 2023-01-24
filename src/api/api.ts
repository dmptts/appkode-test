import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464',
});

export const getAllContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async () => {
    try {
      const response = await api.get('/users?__example=all');
      console.log(response.data.items);
      return response.data.items;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Произошла ошибка: ${err.message}`);
      }

      throw new Error('Произошла ошибка!');
    }
  }
);

export const getApiError = createAsyncThunk(
  'contacts/getApiError',
  async () => {
    try {
      const response = await api.get('/users?__code=500&__dynamic=true');

      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Произошла ошибка: ${err.message}`);
      }

      throw new Error('Произошла ошибка!');
    }
  }
);
