import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Meu site</h1>
      <a className="header__link">Home</a>
      <a className="header__link">Sobre</a>
      <a className="header__link">Contato</a>
    </header>
  );
}

export default Header;
