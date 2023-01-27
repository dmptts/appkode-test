import styled from 'styled-components';
import { visuallyHidden } from '../global-styles';
import { useAppDispatch, useAppSelector } from '../hooks';
import Container from './Container';
import Header from './Header';
import SortingModal from './SortingModal';
import MainPageErrorMessage from './MainPageErrorMessage';
import {
  selectConnectionStatus,
  selectContactsBySearch,
  selectContactsError,
  selectContactsLoadingStatus,
} from '../store/selectors';
import ContactList from './ContactList';
import ContactSkeletonList from './ContactSkeletonList';
import MainPageNoResultsMessage from './MainPageNoResultsMessage';
import { useEffect } from 'react';
import { getAllContacts } from '../api/api';
import { ConnectionStatuses } from '../const';

export default function MainPage() {
  const dispatch = useAppDispatch();
  const connectionStatus = useAppSelector(selectConnectionStatus);
  const contacts = useAppSelector(selectContactsBySearch);
  const loading = useAppSelector(selectContactsLoadingStatus);
  const error = useAppSelector(selectContactsError);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  useEffect(() => {
    if (connectionStatus === ConnectionStatuses.PENDING) {
      dispatch(getAllContacts());
    }
  }, [connectionStatus, dispatch]);

  return (
    <>
      <PageContainer>
        <Header />
        <MainContainer>
          <InnerMainContainer>
            <PageTitle>Книга контактов</PageTitle>
            {loading ? (
              <ContactSkeletonList />
            ) : error ? (
              <MainPageErrorMessage />
            ) : contacts.length === 0 ? (
              <MainPageNoResultsMessage />
            ) : (
              <ContactList contacts={contacts} />
            )}
          </InnerMainContainer>
        </MainContainer>
      </PageContainer>
      <SortingModal />
    </>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: var(--app-height);

  overflow-y: hidden;
`;

const PageTitle = styled.h1`
  ${visuallyHidden}
`;

const MainContainer = styled.main`
  display: flex;
  flex-grow: 1;

  overflow-y: scroll;
`;

const InnerMainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
