import { Dispatch } from 'react';
import styled from 'styled-components';
import Container from './Container';
import Filter from './Filter';
import Search from './Search';

interface IHeaderProps {
  setIsModalOpened: Dispatch<boolean>;
}

export default function Header({ setIsModalOpened }: IHeaderProps) {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Search setIsModalOpened={setIsModalOpened} />
        <Filter />
      </HeaderContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  border-bottom: 1px solid #c3c3c6;
`;

const HeaderContainer = styled(Container)`
  padding-top: 16px;
`;
