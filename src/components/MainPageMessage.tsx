import { ReactNode } from 'react';
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
