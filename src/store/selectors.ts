import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const selectOpenedModal = (state: RootState) => state.modals.activeModal;
export const selectContactsError = (state: RootState) => state.contacts.error;
export const selectContactsLoadingStatus = (state: RootState) =>
  state.contacts.loading;
export const selectAllContacts = (state: RootState) => state.contacts.all;
export const selectContactsFilter = (state: RootState) => state.filter.contacts;

export const selectContactsByDepartment = createSelector(
  [selectAllContacts, selectContactsFilter],
  (allContacts, activeFilter) => {
    if (activeFilter === 'all') {
      return allContacts;
    } else {
      return allContacts.filter(
        (contact) => contact.department === activeFilter
      );
    }
  }
);
