import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import modalsReducer from './modalSlice';
import filtersReducer from './filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    modals: modalsReducer,
    filter: filtersReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
