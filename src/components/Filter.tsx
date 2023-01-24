import { ContactFilter } from '../const';
import { useAppDispatch } from '../hooks';
import { changeFilter } from '../store/filtersSlice';
import Tabs from './Tabs';

export default function Filter() {
  const dispatch = useAppDispatch();

  return (
    <Tabs>
      <Tabs.TabItem
        clickHandler={() => dispatch(changeFilter(ContactFilter.ALL))}
      >
        Все
      </Tabs.TabItem>
      <Tabs.TabItem
        clickHandler={() => dispatch(changeFilter(ContactFilter.DESIGN))}
      >
        Designers
      </Tabs.TabItem>
      <Tabs.TabItem
        clickHandler={() => dispatch(changeFilter(ContactFilter.ANALYTICS))}
      >
        Analysts
      </Tabs.TabItem>
      <Tabs.TabItem
        clickHandler={() => dispatch(changeFilter(ContactFilter.MANAGMENT))}
      >
        Managers
      </Tabs.TabItem>
      <Tabs.TabItem
        clickHandler={() => dispatch(changeFilter(ContactFilter.IOS))}
      >
        iOS
      </Tabs.TabItem>
      <Tabs.TabItem
        clickHandler={() => dispatch(changeFilter(ContactFilter.ANDROID))}
      >
        Android
      </Tabs.TabItem>
    </Tabs>
  );
}
