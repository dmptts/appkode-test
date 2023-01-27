import { createSlice } from '@reduxjs/toolkit';
import { ContactsFilterTypes } from '../const';

interface IInitialState {
  contacts: ContactsFilterTypes;
}

const initialState: IInitialState = {
  contacts: ContactsFilterTypes.ALL,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.contacts = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
