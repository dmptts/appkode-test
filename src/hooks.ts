import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  closeModal as closeModalAction,
  openModal as openModalAction,
} from './store/modalSlice';
import { selectOpenedModal } from './store/selectors';
import { RootState, AppDispatch } from './store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useModal = () => {
  const dispatch = useAppDispatch();
  const activeModal = useAppSelector(selectOpenedModal);
  const openModal = (value: string) => dispatch(openModalAction(value));
  const closeModal = () => dispatch(closeModalAction());

  return { activeModal, openModal, closeModal };
};
