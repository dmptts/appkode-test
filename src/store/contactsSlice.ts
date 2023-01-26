import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getAllContacts, getApiError } from '../api/api';
import { IContact } from '../const';
import { addMinutesToDate } from '../utils';
import { RootState } from './store';

const DATA_LIFETIME_MIN = 5;
const contactsAdapter = createEntityAdapter<IContact>();

interface IExtendedEntityAdapterState {
  expiresAt: number | null;
  loading: boolean;
  error: string | null;
}

const initialState: IExtendedEntityAdapterState = {
  expiresAt: null,
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
        state.error = null;
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        contactsAdapter.setAll(state, action.payload);
        state.expiresAt = addMinutesToDate(new Date(), DATA_LIFETIME_MIN);
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
