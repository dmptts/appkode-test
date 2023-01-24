import styled from 'styled-components';
import MainPageMessage from './MainPageMessage';

export default function MainPageNoResultsMessage() {
  return (
    <MainPageMessage>
      <Emoji>&#x1F50D;</Emoji>
      <MessageHeader>Мы никого не нашли</MessageHeader>
      <Message>Попробуй скорректировать запрос</Message>
    </MainPageMessage>
  );
}

const Emoji = styled.span`
  margin-bottom: 8px;

  font-size: 3.5rem;
  line-height: 1;
`;

const MessageHeader = styled.h2`
  margin: 0;
  margin-bottom: 12px;

  font-size: 1rem;
  font-weight: 600;
`;

const Message = styled.p`
  margin: 0;
  margin-bottom: 12px;

  color: var(--color-text-light-primary);
`;
