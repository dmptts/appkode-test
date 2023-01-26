import { ContactFilter } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeFilter } from '../store/filtersSlice';
import { selectContactsFilter } from '../store/selectors';
import Tabs from './Tabs';

export default function Filter() {
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector(selectContactsFilter);

  return (
    <Tabs
      value={activeFilter}
      clickHandler={(value: ContactFilter) => dispatch(changeFilter(value))}
    >
      <Tabs.TabItem value={ContactFilter.ALL}>Все</Tabs.TabItem>
      <Tabs.TabItem value={ContactFilter.DESIGN}>Designers</Tabs.TabItem>
      <Tabs.TabItem value={ContactFilter.ANALYTICS}>Analysts</Tabs.TabItem>
      <Tabs.TabItem value={ContactFilter.MANAGMENT}>Managers</Tabs.TabItem>
      <Tabs.TabItem value={ContactFilter.IOS}>iOS</Tabs.TabItem>
      <Tabs.TabItem value={ContactFilter.ANDROID}>Android</Tabs.TabItem>
    </Tabs>
  );
}
