import { RootState } from './store';

export const selectOpenedModal = (state: RootState) => state.modals.activeModal;
