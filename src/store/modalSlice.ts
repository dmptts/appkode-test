import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  activeModal: string | null;
}

const initialState: IInitialState = {
  activeModal: null,
};

const modalsSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.activeModal = action.payload;
    },
    closeModal: (state) => {
      state.activeModal = null;
    },
  },
});

export default modalsSlice.reducer;
export const { openModal, closeModal } = modalsSlice.actions;
