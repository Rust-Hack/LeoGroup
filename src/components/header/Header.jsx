import { Link } from "react-router";
import logoWhite from "../../assets/logoWhite.svg";

function Header() {
  return (
    <header>
      <div>
        <img src={logoWhite} alt="Logo" />
      </div>
      <div>
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/about">О компании</Link>
        <Link to="/contacts">Контакты</Link>
      </div>
    </header>
  );
}

export default Header;
