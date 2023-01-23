import { RootState } from './store';

export const selectOpenedModal = (state: RootState) => state.modals.activeModal;
export const selectContactsError = (state: RootState) => state.contacts.error;
