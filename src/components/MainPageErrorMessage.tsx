import { getAllContacts } from '../api/api';
import { useAppDispatch } from '../hooks';
import MainPageMessage from './MainPageMessage';

export default function MainPageErrorMessage() {
  const dispatch = useAppDispatch();
  return (
    <MainPageMessage>
      <MainPageMessage.Emoji>&#x1f6f8;</MainPageMessage.Emoji>
      <MainPageMessage.Header>
        Какой-то сверхразум все сломал
      </MainPageMessage.Header>
      <MainPageMessage.Body>Постараемся быстро починить</MainPageMessage.Body>
      <MainPageMessage.Button
        type="button"
        onClick={() => dispatch(getAllContacts())}
      >
        Попробовать снова
      </MainPageMessage.Button>
    </MainPageMessage>
  );
}
