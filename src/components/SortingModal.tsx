import Modal from './Modal';
import RadioList from './RadioList';

export default function SortingModal() {
  return (
    <Modal name="contacts-sorting">
      <Modal.Header>Сортировка</Modal.Header>
      <Modal.Body>
        <RadioList name="contacts-sorting" value="alphabet">
          <RadioList.Item value="alphabet">По алфавиту</RadioList.Item>
          <RadioList.Item value="birthday">По дню рождения</RadioList.Item>
        </RadioList>
      </Modal.Body>
    </Modal>
  );
}
