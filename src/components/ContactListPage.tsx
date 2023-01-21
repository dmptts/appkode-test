import styled from 'styled-components';
import { visuallyHidden } from '../global-styles';
import ContactItem from './ContactItem';
import Container from './Container';
import Header from './Header';

export default function ContactListPage() {
  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <Container>
          <PageTitle>Книга контактов</PageTitle>
          <ContactList>
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
          </ContactList>
        </Container>
      </MainContainer>
    </PageContainer>
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
  overflow-y: scroll;
`;

const ContactList = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  padding-top: 16px;

  list-style: none;
`;
