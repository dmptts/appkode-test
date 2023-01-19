import Contact from './ContactItem';
import Container from './Container';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Книга контактов</h1>
          <ul>
            <li>
              <Contact></Contact>
              <Contact></Contact>
              <Contact></Contact>
              <Contact></Contact>
              <Contact></Contact>
              <Contact></Contact>
              <Contact></Contact>
            </li>
          </ul>
        </Container>
      </main>
    </>
  );
}

export default App;
