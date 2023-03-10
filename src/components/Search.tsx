import styled from 'styled-components';
import { visuallyHidden } from '../global-styles';
import { ReactComponent as SearchIcon } from './../images/icon-search.svg';
import { ReactComponent as ListIcon } from './../images/icon-list.svg';
import {
  useDebounce,
  useAppDispatch,
  useModal,
  useAppSelector,
} from '../hooks';
import { ChangeEvent, useEffect, useState } from 'react';
import { setSearchTerm } from '../store/searchSlice';
import {
  selectConnectionStatus,
  selectContactsSearch,
} from '../store/selectors';
import { ConnectionStatuses } from '../const';

export default function Search() {
  const dispatch = useAppDispatch();
  const storedSearchTerm = useAppSelector(selectContactsSearch);
  const connectionStatus = useAppSelector(selectConnectionStatus);
  const { openModal } = useModal();
  const [searchQuery, setSearchQuery] = useState(storedSearchTerm);
  const debouncedSearch = useDebounce(searchQuery);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(setSearchTerm(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <SearchContainer>
      <SearchTitle connectionStatus={connectionStatus}>Поиск</SearchTitle>
      {connectionStatus === ConnectionStatuses.OFFLINE ? (
        <SearchErrorMessage>
          Не могу обновить данные. Проверь соединение с интернетом.
        </SearchErrorMessage>
      ) : connectionStatus === ConnectionStatuses.PENDING ? (
        <SearchErrorMessage>Секундочку, гружусь...</SearchErrorMessage>
      ) : (
        <InputWrapper>
          <StyledLabel htmlFor="main-search">Поиск</StyledLabel>
          <StyledSearchIcon />
          <StyledInput
            type="search"
            name="contacts-search"
            id="contacts-search"
            placeholder="Введи имя, тэг, почту..."
            value={searchQuery}
            onChange={handleChange}
          />
          <SortingBtn onClick={() => openModal('contacts-sorting')}>
            <StyledListIcon />
            Сортировка
          </SortingBtn>
        </InputWrapper>
      )}
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchTitle = styled.b<{ connectionStatus: ConnectionStatuses }>`
  margin-bottom: 16px;
  padding-left: 8px;

  font-size: 1.5rem;
  font-weight: 700;

  color: ${({ connectionStatus }) =>
    connectionStatus === ConnectionStatuses.ONLINE
      ? 'var(--color-text-default)'
      : 'var(--color-default-white)'};
`;

const StyledLabel = styled.label`
  ${visuallyHidden}
`;

const StyledInput = styled.input`
  position: relative;

  width: 100%;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 44px;
  padding-right: 20px;

  font-size: 0.93rem;
  font-weight: 500;
  color: var(--color-text-default);

  background-color: var(--color-bg);
  border: none;
  border-radius: 16px;

  &::placeholder {
    color: var(--color-text-light-secondary);
  }

  &:focus {
    outline: none;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 50%;
  left: 12px;
  z-index: 1;

  width: 24px;
  height: 24px;

  transform: translateY(-50%);
`;

const InputWrapper = styled.div`
  position: relative;

  &:focus-within ${StyledSearchIcon} {
    fill: var(--color-text-default);
  }
`;

const StyledListIcon = styled(ListIcon)`
  width: 24px;
  height: 24px;

  fill: var(--color-text-light-secondary);
`;

const SortingBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;

  margin: 0;
  padding: 0;

  width: 24px;
  height: 24px;

  font-size: 0;

  background-color: transparent;
  border: none;
  cursor: pointer;

  transform: translateY(-50%);

  &:hover ${StyledListIcon}, &:active ${StyledListIcon} {
    fill: var(--color-brand-violet);
  }
`;

const SearchErrorMessage = styled.p`
  margin: 0;
  margin-bottom: 20px;
  padding-left: 8px;

  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-default-white);
`;
