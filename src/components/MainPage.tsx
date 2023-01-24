import { useEffect } from 'react';
import styled from 'styled-components';
import { getAllContacts } from '../api/api';
import { visuallyHidden } from '../global-styles';
import { useAppDispatch, useAppSelector } from '../hooks';
import Container from './Container';
import Header from './Header';
import SortingModal from './SortingModal';
import MainPageErrorMessage from './MainPageErrorMessage';
import {
  selectContactsBySearch,
  selectContactsError,
  selectContactsLoadingStatus,
} from '../store/selectors';
import ContactList from './ContactList';
import ContactSkeletonList from './ContactSkeletonList';

export default function MainPage() {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContactsBySearch);
  const loading = useAppSelector(selectContactsLoadingStatus);
  const error = useAppSelector(selectContactsError);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

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
