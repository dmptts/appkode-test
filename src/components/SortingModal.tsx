import { ContactsSortingTypes } from '../const';
import { useAppDispatch, useAppSelector, useModal } from '../hooks';
import { selectContactsSorting } from '../store/selectors';
import { setContactsSorting } from '../store/sortingSlice';
import Modal from './Modal';
import RadioList from './RadioList';

export default function SortingModal() {
  const dispatch = useAppDispatch();
  const sortingType = useAppSelector(selectContactsSorting);
  const { closeModal } = useModal();

  return (
    <Modal name="contacts-sorting">
      <Modal.Header>Сортировка</Modal.Header>
      <Modal.Body>
        <RadioList
          changeHandler={(value: ContactsSortingTypes) => {
            dispatch(setContactsSorting(value));
            closeModal();
          }}
          name="contacts-sorting"
          value={sortingType}
        >
          <RadioList.Item value={ContactsSortingTypes.BY_ALPHABET}>
            По алфавиту
          </RadioList.Item>
          <RadioList.Item value={ContactsSortingTypes.BY_BIRTHDAYS}>
            По дню рождения
          </RadioList.Item>
        </RadioList>
      </Modal.Body>
    </Modal>
  );
}
