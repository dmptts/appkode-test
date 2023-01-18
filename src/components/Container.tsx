import { ReactNode } from 'react';
import styled from 'styled-components';

interface IContainerProps {
  children: ReactNode;
}

export default function Container({ children }: IContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
`;
