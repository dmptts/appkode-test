import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { contactsSelectors } from '../store/contactsSlice';
import { EntityId } from '@reduxjs/toolkit';
import ContactPageHeader from './ContactPageHeader';
import ContactPageBody from './ContactPageBody';
import { useEffect } from 'react';
import { getAllContacts } from '../api/api';

export default function ContactPage() {
  const { contactId } = useParams();
  const contact = useAppSelector((state) =>
    contactsSelectors.selectById(state, contactId as EntityId)
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!contact) {
      dispatch(getAllContacts());
    }
  }, [dispatch, contact]);

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
