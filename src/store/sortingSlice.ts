import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  contacts: 'birthday' | 'alphabet';
}

const initialState: IInitialState = {
  contacts: 'alphabet',
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
