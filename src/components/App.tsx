import Contact from './Contact';
import Container from './Container';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
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
