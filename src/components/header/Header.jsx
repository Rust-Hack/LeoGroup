import { NavLink } from "react-router-dom";
import logoBlack from "../../assets/logoBlack.svg";
import logoWhite from "../../assets/headerLogoWhite.svg";
import mobileLogoWhite from "../../assets/mobileHeaderLogo.svg";
import mobileLogoBlack from "../../assets/mobileHeaderLogoBlack.svg";
// import wave from "../../assets/wave.svg";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

function Header({ variant = "default" }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1030) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`${styles.header} ${
        variant === "home" ? styles.homeHeader : ""
      }`}
    >
      <div>
        <img src={variant === "home" ? logoWhite : logoBlack} alt="Logo" />
      </div>
      <div className={styles.mobileLogo}>
        <img
          src={variant === "home" ? mobileLogoWhite : mobileLogoBlack}
          alt=""
        />
      </div>
      <div
        className={`${styles.linksBlock} ${isOpen ? styles.linksBlockActive : styles.linksBlock}`}
      >
        <div className={isOpen ? styles.menuAndLinkHome : ''}>
          <button
            className={`${styles.burger} ${styles.burgerWhite}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link1} ${styles.active}` : styles.link1
            }
          >
            Главная
          </NavLink>
        </div>

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
        <div className={styles.twoWaves}>
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="
                M 0 40

                C 45 20, 135 20, 180 40
                C 225 60, 315 60, 360 40

                C 405 20, 495 20, 540 40
                C 585 60, 675 60, 720 40

                C 765 20, 855 20, 900 40
                C 945 60, 1035 60, 1080 40

                C 1125 20, 1215 20, 1260 40
                C 1305 60, 1395 60, 1440 40

                L 1440 80
                L 0 80
                Z
              "
              fill="#20A9F0"
            />
          </svg>
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="
                M 0 40

                C 45 20, 135 20, 180 40
                C 225 60, 315 60, 360 40

                C 405 20, 495 20, 540 40
                C 585 60, 675 60, 720 40

                C 765 20, 855 20, 900 40
                C 945 60, 1035 60, 1080 40

                C 1125 20, 1215 20, 1260 40
                C 1305 60, 1395 60, 1440 40

                L 1440 80
                L 0 80
                Z
              "
              fill="#20A9F0"
            />
          </svg>
        </div>
      </div>
      <button
        className={`${isOpen ? styles.burgerNone : styles.burger} ${
          variant === "home" ? styles.burgerWhite : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

export default Header;
