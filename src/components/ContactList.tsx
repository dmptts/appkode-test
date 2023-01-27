import styled from 'styled-components';
import { ContactsSortingTypes, IContact } from '../const';
import { useAppSelector } from '../hooks';
import { selectContactsSorting } from '../store/selectors';
import { getNextBirthday, sortByAlphabet, sortByBirthday } from '../utils';
import ContactItem from './ContactItem';

interface IContactListProps {
  contacts: IContact[];
}

export default function ContactList({ contacts }: IContactListProps) {
  const sortingType = useAppSelector(selectContactsSorting);

  const renderList = () => {
    switch (sortingType) {
      case ContactsSortingTypes.BY_BIRTHDAYS:
        const sortedByBirthdayContacts = contacts.sort((a, b) =>
          sortByBirthday(new Date(a.birthday), new Date(b.birthday))
        );

        const firstNextYearBirthdayIndex = sortedByBirthdayContacts.findIndex(
          (contact) =>
            getNextBirthday(new Date(contact.birthday)).getFullYear() ===
            new Date().getFullYear() + 1
        );

        const currentYearBirthdayContacts = sortedByBirthdayContacts.slice(
          0,
          firstNextYearBirthdayIndex
        );

        const nextYearByrthdayContacts = sortedByBirthdayContacts.slice(
          firstNextYearBirthdayIndex
        );

        return (
          <>
            {currentYearBirthdayContacts.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}

            {currentYearBirthdayContacts.length !== 0 && (
              <ListSeparator>
                <SeparatorText>{`${
                  new Date().getFullYear() + 1
                }`}</SeparatorText>
              </ListSeparator>
            )}

            {nextYearByrthdayContacts.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </>
        );

      case ContactsSortingTypes.BY_ALPHABET:
        return contacts
          .sort((a, b) => sortByAlphabet(a.firstName, b.firstName))
          .map((contact) => <ContactItem key={contact.id} contact={contact} />);
    }
  };

  return <List>{contacts && renderList()}</List>;
}

const List = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  padding-top: 16px;

  list-style: none;
`;

const ListSeparator = styled.li`
  position: relative;

  width: 100%;

  color: var(--color-text-light-secondary);
  text-align: center;

  &::before {
    position: absolute;
    top: 50%;
    left: 24px;
    right: 24px;
    content: '';
    z-index: -1;

    height: 1px;
    background-color: var(--color-text-light-secondary);
  }
`;

const SeparatorText = styled.span`
  display: block;
  width: 160px;
  margin: 0 auto;

  color: var(--color-text-light-secondary);
  text-align: center;

  background-color: var(--color-default-white);
`;
