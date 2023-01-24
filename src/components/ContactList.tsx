import styled from 'styled-components';
import { IContact } from '../const';
import ContactItem from './ContactItem';

interface IContactListProps {
  contacts: IContact[];
}

export default function ContactList({ contacts }: IContactListProps) {
  return (
    <List>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
}

const List = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  padding-top: 16px;

  list-style: none;
`;
