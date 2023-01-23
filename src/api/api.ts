import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IContact } from '../const';

const api = axios.create({
  baseURL:
    'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464',
});

export const getAllContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async () => {
    try {
      const response = await api.get<IContact[]>('/users?__example=all');

      if (response.statusText !== 'OK') {
        throw new Error('Произошла ошибка!');
      }

      return response.data;
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
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get<IContact[]>(
        '/users?__code=500&__dynamic=true'
      );

      if (response.statusText !== 'OK') {
        throw new Error('Произошла ошибка!');
      }

      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Произошла ошибка: ${err.message}`);
      }

      throw new Error('Произошла ошибка!');
    }
  }
);
