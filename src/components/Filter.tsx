import styled from 'styled-components';
import { ContactsFilterTypes } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeFilter } from '../store/filtersSlice';
import { selectContactsFilter } from '../store/selectors';
import Container from './Container';
import Tabs from './Tabs';

export default function Filter() {
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector(selectContactsFilter);

  return (
    <FilterContainer>
      <Tabs
        value={activeFilter}
        clickHandler={(value: ContactsFilterTypes) =>
          dispatch(changeFilter(value))
        }
      >
        <Tabs.TabItem value={ContactsFilterTypes.ALL}>Все</Tabs.TabItem>
        <Tabs.TabItem value={ContactsFilterTypes.DESIGN}>
          Designers
        </Tabs.TabItem>
        <Tabs.TabItem value={ContactsFilterTypes.ANALYTICS}>
          Analysts
        </Tabs.TabItem>
        <Tabs.TabItem value={ContactsFilterTypes.MANAGMENT}>
          Managers
        </Tabs.TabItem>
        <Tabs.TabItem value={ContactsFilterTypes.IOS}>iOS</Tabs.TabItem>
        <Tabs.TabItem value={ContactsFilterTypes.ANDROID}>Android</Tabs.TabItem>
      </Tabs>
    </FilterContainer>
  );
}

const FilterContainer = styled(Container)`
  padding-top: 8px;

  overflow: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
