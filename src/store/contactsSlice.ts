import { createSlice } from '@reduxjs/toolkit';
import { getAllContacts, getApiError } from '../api/api';
import { IContact } from '../const';

interface IInitialState {
  entities: IContact[];
  loading: boolean;
  error: string | null;
}

const initialState: IInitialState = {
  entities: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(getApiError.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export default contactsSlice.reducer;
