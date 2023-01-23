import styled from 'styled-components';
import Container from './Container';
import Filter from './Filter';
import Search from './Search';

export default function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Search />
        <Filter />
      </HeaderContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  border-bottom: 1px solid var(--color-text-light-secondary);
`;

const HeaderContainer = styled(Container)`
  padding-top: 16px;
`;
