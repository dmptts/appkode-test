import styled from 'styled-components';
import { visuallyHidden } from '../global-styles';
import { ReactComponent as SearchIcon } from './../images/icon-search.svg';

export default function Search() {
  return (
    <SearchContainer>
      <SearchTitle>Поиск</SearchTitle>
      <InputWrapper>
        <StyledLabel htmlFor="main-search">Поиск</StyledLabel>
        <StyledSearchIcon />
        <StyledInput
          type="search"
          name="contacts-search"
          id="contacts-search"
          placeholder="Введите имя, тэг, почту..."
        />
      </InputWrapper>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 16px;
`;

const SearchTitle = styled.b`
  margin-bottom: 18px;
  padding-left: 8px;

  font-size: 1.5rem;
  font-weight: 700;
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
  color: #050510;

  background-color: #f7f7f8;
  border: none;
  border-radius: 16px;

  &::placeholder {
    color: #c3c3c6;
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
    fill: #050510;
  }
`;
