import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  contacts: string;
}

const initialState: IInitialState = {
  contacts: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.contacts = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { setSearchTerm } = searchSlice.actions;
