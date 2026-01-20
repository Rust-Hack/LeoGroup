import { NavLink } from "react-router-dom";
import logoBlack from "../../assets/logoBlack.svg";
import logoWhite from "../../assets/headerLogoWhite.svg";
import styles from "./Header.module.css";

function Header({ variant = "default" }) {
  return (
    <header
      className={`${styles.header} ${
        variant === "home" ? styles.homeHeader : ""
      }`}
    >
      <div>
        <img src={variant === "home" ? logoWhite : logoBlack} alt="Logo" />
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
