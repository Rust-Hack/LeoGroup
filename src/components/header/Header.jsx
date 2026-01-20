import { NavLink } from "react-router-dom";
import logoWhite from "../../assets/logoBlack.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logoWhite} alt="Logo" />
      </div>
      <div className={styles.linksBlock}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Главная
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Каталог
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          О компании
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Контакты
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
