import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { contactsSelectors } from '../store/contactsSlice';
import { EntityId } from '@reduxjs/toolkit';
import ContactPageHeader from './ContactPageHeader';
import ContactPageBody from './ContactPageBody';

export default function ContactPage() {
  const { contactId } = useParams();
  const contact = useAppSelector((state) =>
    contactsSelectors.selectById(state, contactId as EntityId)
  );

  return (
    <>
      {contact && (
        <>
          <ContactPageHeader contact={contact} />
          <ContactPageBody contact={contact} />
        </>
      )}
    </>
  );
}
