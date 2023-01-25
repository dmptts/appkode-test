import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getAllContacts, getApiError } from '../api/api';
import { IContact } from '../const';
import { RootState } from './store';

const contactsAdapter = createEntityAdapter<IContact>();

interface IExtendedEntityAdapterState {
  loading: boolean;
  error: string | null;
}

const initialState: IExtendedEntityAdapterState = {
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        contactsAdapter.setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(getApiError.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export default contactsSlice.reducer;
export const contactsSelectors = contactsAdapter.getSelectors(
  (state: RootState) => state.contacts
);
