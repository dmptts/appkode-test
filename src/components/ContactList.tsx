import styled from 'styled-components';
import ContactItem from './ContactItem';

export default function ContactList() {
  return (
    <List>
      <li>
        <ContactItem />
      </li>
      <li>
        <ContactItem />
      </li>
      <li>
        <ContactItem />
      </li>
      <li>
        <ContactItem />
      </li>
      <li>
        <ContactItem />
      </li>
      <li>
        <ContactItem />
      </li>
      <li>
        <ContactItem />
      </li>
      <li>
        <ContactItem />
      </li>
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
