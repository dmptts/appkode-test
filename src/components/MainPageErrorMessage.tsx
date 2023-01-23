import styled from 'styled-components';
import MainPageMessage from './MainPageMessage';

export default function MainPageErrorMessage() {
  return (
    <MainPageMessage>
      <Emoji>&#x1f6f8;</Emoji>
      <MessageHeader>Какой-то сверхразум все сломал</MessageHeader>
      <Message>Постараемся быстро починить</Message>
      <Button type="button">Попробовать снова</Button>
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

const Button = styled.button`
  padding: 0;

  font-weight: 600;
  color: var(--color-brand-violet);

  background-color: transparent;
  border: none;
  cursor: pointer;
`;
