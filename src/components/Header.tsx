import Container from './Container';
import Filter from './Filter';

export default function Header() {
  return (
    <header>
      <Container>
        <label htmlFor="main-search">Поиск</label>
        <input
          type="search"
          name="search"
          id="main-search"
          placeholder="Введите имя, тэг, почту..."
        />
        <Filter />
      </Container>
    </header>
  );
}
