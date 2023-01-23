import { configureStore } from '@reduxjs/toolkit';
import modalsReducer from './modalSlice';

const store = configureStore({
  reducer: {
    modals: modalsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
