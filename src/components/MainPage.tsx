import { useEffect } from 'react';
import styled from 'styled-components';
import { getAllContacts, getApiError } from '../api/api';
import { visuallyHidden } from '../global-styles';
import { useAppDispatch, useAppSelector } from '../hooks';
import Container from './Container';
import Header from './Header';
import SortingModal from './SortingModal';
import MainPageErrorMessage from './MainPageErrorMessage';
import { selectContactsError } from '../store/selectors';
import ContactList from './ContactList';

export default function MainPage() {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectContactsError);

  useEffect(() => {
    dispatch(getApiError());
  }, [dispatch]);

  return (
    <>
      <PageContainer>
        <Header />
        <MainContainer>
          <InnerMainContainer>
            <PageTitle>Книга контактов</PageTitle>
            {error ? <MainPageErrorMessage /> : <ContactList />}
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
  flex-grow: 1;
`;
