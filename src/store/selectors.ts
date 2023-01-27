import { createSelector } from '@reduxjs/toolkit';
import { contactsSelectors } from './contactsSlice';
import { RootState } from './store';

export const selectOpenedModal = (state: RootState) => state.modals.activeModal;
export const selectContactsError = (state: RootState) => state.contacts.error;
export const selectContactsLoadingStatus = (state: RootState) =>
  state.contacts.loading;
export const selectContactsFilter = (state: RootState) => state.filter.contacts;
export const selectContactsSearch = (state: RootState) => state.search.contacts;
export const selectContactsSorting = (state: RootState) =>
  state.sorting.contacts;
export const selectConnectionStatus = (state: RootState) =>
  state.connection.status;

export const selectContactsByDepartment = createSelector(
  [contactsSelectors.selectAll, selectContactsFilter],
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

export const selectContactsBySearch = createSelector(
  [selectContactsByDepartment, selectContactsSearch],
  (filteredContacts, searchTerm) => {
    if (searchTerm === '') {
      return filteredContacts;
    } else {
      return filteredContacts.filter((contact) => {
        let result; // Avoiding eslint warning
        for (const key in contact) {
          if (
            contact[key]
              .toString()
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            result = true;
          }
        }
        return result;
      });
    }
  }
);
