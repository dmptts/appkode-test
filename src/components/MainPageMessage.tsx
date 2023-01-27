import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface IMainPageMessageProps {
  children: ReactNode;
}

export default function MainPageMessage({ children }: IMainPageMessageProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

interface IMessageEmojiProps {
  children: string;
}

function MessageEmoji({ children }: IMessageEmojiProps) {
  return <Emoji>{children}</Emoji>;
}

MainPageMessage.Emoji = MessageEmoji;

const Emoji = styled.span`
  margin-bottom: 8px;

  font-size: 3.5rem;
  line-height: 1;
`;

interface IMessageHeaderProps {
  children: string;
}

function MessageHeader({ children }: IMessageHeaderProps) {
  return <Header>{children}</Header>;
}

MainPageMessage.Header = MessageHeader;

const Header = styled.h2`
  margin: 0;
  margin-bottom: 12px;

  font-size: 1rem;
  font-weight: 600;
`;

interface IMessageBodyProps {
  children: ReactNode;
}

function MessageBody({ children }: IMessageBodyProps) {
  return <Body>{children}</Body>;
}

MainPageMessage.Body = MessageBody;

const Body = styled.p`
  margin: 0;
  margin-bottom: 12px;

  color: var(--color-text-light-primary);
`;

interface IMessageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

function MessageButton({ children, onClick }: IMessageButtonProps) {
  return <Button onClick={onClick}>{children}</Button>;
}

MainPageMessage.Button = MessageButton;

const Button = styled.button`
  padding: 0;

  font-weight: 600;
  color: var(--color-brand-violet);

  background-color: transparent;
  border: none;
  cursor: pointer;
`;
