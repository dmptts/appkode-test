import styled from 'styled-components';
import Container from './Container';
import Filter from './Filter';
import Search from './Search';

export default function Header() {
  return (
    <header>
      <HeaderContainer>
        <Search />
        <Filter />
      </HeaderContainer>
    </header>
  );
}

const HeaderContainer = styled(Container)`
  padding-top: 16px;
`;
