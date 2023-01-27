import styled from 'styled-components';
import { ConnectionStatuses } from '../const';
import { useAppSelector } from '../hooks';
import { selectConnectionStatus } from '../store/selectors';
import Container from './Container';
import Filter from './Filter';
import Search from './Search';

export default function Header() {
  const connectionStatus = useAppSelector(selectConnectionStatus);

  return (
    <StyledHeader>
      <SearchContainer connectionStatus={connectionStatus}>
        <SearchInnerContainer>
          <Search />
        </SearchInnerContainer>
      </SearchContainer>
      <Filter />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  border-bottom: 1px solid var(--color-text-light-secondary);
`;

const SearchContainer = styled.div<{ connectionStatus: ConnectionStatuses }>`
  background-color: ${({ connectionStatus }) => {
    switch (connectionStatus) {
      case ConnectionStatuses.OFFLINE:
        return 'var(--color-error)';
      case ConnectionStatuses.PENDING:
        return 'var(--color-brand-violet)';
      default:
        return 'var(--color-default-white)';
    }
  }};
`;

const SearchInnerContainer = styled(Container)`
  padding-top: 16px;
  padding-bottom: 9px;
`;
