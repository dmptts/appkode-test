import MainPageMessage from './MainPageMessage';

export default function MainPageNoResultsMessage() {
  return (
    <MainPageMessage>
      <MainPageMessage.Emoji>&#x1F50D;</MainPageMessage.Emoji>
      <MainPageMessage.Header>Мы никого не нашли</MainPageMessage.Header>
      <MainPageMessage.Body>
        Попробуй скорректировать запрос
      </MainPageMessage.Body>
    </MainPageMessage>
  );
}
