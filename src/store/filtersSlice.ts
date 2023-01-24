import { createSlice } from '@reduxjs/toolkit';
import { ContactFilter } from '../const';

interface IInitialState {
  contacts: ContactFilter;
}

const initialState: IInitialState = {
  contacts: ContactFilter.ALL,
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
