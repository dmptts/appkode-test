import { createSlice } from '@reduxjs/toolkit';
import { ContactsSortingTypes } from '../const';

interface IInitialState {
  contacts: ContactsSortingTypes;
}

const initialState: IInitialState = {
  contacts: ContactsSortingTypes.BY_ALPHABET,
};

const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setContactsSorting: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export default sortingSlice.reducer;
export const { setContactsSorting } = sortingSlice.actions;
