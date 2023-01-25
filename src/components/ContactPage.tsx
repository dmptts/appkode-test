import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { contactsSelectors } from '../store/contactsSlice';
import { EntityId } from '@reduxjs/toolkit';

export default function ContactPage() {
  const { contactId } = useParams();
  const contact = useAppSelector((state) =>
    contactsSelectors.selectById(state, contactId as EntityId)
  );

  return (
    <>
      {contact && (
        <h1>
          Страница {contact.firstName} {contact.lastName}!
        </h1>
      )}
    </>
  );
}
