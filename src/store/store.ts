import { configureStore } from '@reduxjs/toolkit';
import connectionReducer from './connectionSlice';
import contactsReducer from './contactsSlice';
import modalsReducer from './modalSlice';
import filtersReducer from './filtersSlice';
import searchReducer from './searchSlice';
import sortingReducer from './sortingSlice';

const store = configureStore({
  reducer: {
    connection: connectionReducer,
    contacts: contactsReducer,
    modals: modalsReducer,
    filter: filtersReducer,
    search: searchReducer,
    sorting: sortingReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
