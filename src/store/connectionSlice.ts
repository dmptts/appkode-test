import { createSlice } from '@reduxjs/toolkit';
import { getAllContacts } from '../api/api';
import { ConnectionStatuses } from '../const';

interface IInitialState {
  status: ConnectionStatuses;
}

const initialState: IInitialState = {
  status: ConnectionStatuses.ONLINE,
};

const conectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    setConnectionStatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllContacts.fulfilled, (state) => {
      state.status = ConnectionStatuses.ONLINE;
    });
  },
});

export default conectionSlice.reducer;
export const { setConnectionStatus } = conectionSlice.actions;
