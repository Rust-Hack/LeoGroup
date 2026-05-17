import styles from "./Footer.module.css";
import footerLogo from "../../assets/footer/logo.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer data-bg="dark">
      <div className={styles.footer}>
        <div className={styles.logoWithLocationText}>
          <img src={footerLogo} alt="Logo" />
          <p className={styles.footerTextLocation}>
            Республика Беларусь, 220014, <br />
            г. Минск, пер. Софьи Ковалевской 54 к.1 <br />
            пом. 206П
          </p>
        </div>
        <div className={styles.footerContactsAndMenu}>
          <div className={styles.footerContacts}>
            <h2>Контакты</h2>
            <a href="tel:+375445729237">+375 44 572-92-37</a>
            <a href="tel:+375333336533">+375 33 333-65-33</a>
            <a href="tel:+375172324857">+375 17 232-48-57</a>
            <a href="tel:+375172321782">+375 17 232-17-82</a>
            <a href="mailto:info@leo24.by">info@leo24.by</a>
          </div>
          <div className={styles.footerMenu}>
            <h2>Меню</h2>
            <NavLink to="/" className={styles.footerMenuLink}>
              Главная
            </NavLink>
            <NavLink to="/catalog" className={styles.footerMenuLink}>
              Каталог
            </NavLink>
            <NavLink to="/about" className={styles.footerMenuLink}>
              О компании
            </NavLink>
            <NavLink to="/contacts" className={styles.footerMenuLink}>
              Контакты
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
