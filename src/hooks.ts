import { useEffect, useState } from 'react';
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
  const openModal = (value: string) => {
    dispatch(openModalAction(value));
    return;
  };
  const closeModal = () => {
    dispatch(closeModalAction());
    return;
  };

  return { activeModal, openModal, closeModal };
};

export function useDebounce<T>(value: T, delay: number = 750) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
