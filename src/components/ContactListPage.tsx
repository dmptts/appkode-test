import { useState } from 'react';
import styled from 'styled-components';
import { visuallyHidden } from '../global-styles';
import ContactItem from './ContactItem';
import Container from './Container';
import Header from './Header';
import Modal from './Modal';
import RadioList from './RadioList';

export default function ContactListPage() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <>
      <PageContainer>
        <Header setIsModalOpened={setIsModalOpened} />
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
      <Modal isOpened={isModalOpened} setIsModalOpened={setIsModalOpened}>
        <Modal.Header>Сортировка</Modal.Header>
        <Modal.Body>
          <RadioList name="sorting" value="alphabet">
            <RadioList.Item value="alphabet">По алфавиту</RadioList.Item>
            <RadioList.Item value="birthday">По дню рождения</RadioList.Item>
          </RadioList>
        </Modal.Body>
      </Modal>
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
  overflow-y: scroll;
`;

const ContactList = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  padding-top: 16px;

  list-style: none;
`;
