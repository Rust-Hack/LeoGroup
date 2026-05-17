import { NavLink, useLocation } from "react-router-dom";
import logoBlack from "../../assets/common/home-icon-dark.svg";
import logoWhite from "../../assets/common/home-icon-light.svg";
import mobileLogoWhite from "../../assets/header/text-logo-light.svg";
import mobileLogoBlack from "../../assets/header/text-logo-dark.svg";
import styles from "./Header.module.css";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const NAV_LINKS = [
  { to: "/catalog", label: "Каталог" },
  { to: "/about", label: "О компании" },
  { to: "/contacts", label: "Контакты" },
];

const WAVE_PATH = `M 0 40
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
  Z`;

function Header({ variant = "default" }) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [stickyBg, setStickyBg] = useState("dark");
  const isMobile = useMediaQuery("(max-width: 428px)");
  const isDesktop = useMediaQuery("(min-width: 1031px)");

  useEffect(() => {
    if (isDesktop) setIsOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const probeBg = useCallback(() => {
    const els = document.elementsFromPoint(60, 30);
    for (const el of els) {
      if (el.closest("header")) continue;
      const bgEl = el.closest("[data-bg]");
      if (bgEl) {
        setStickyBg(bgEl.dataset.bg);
        return;
      }
    }
  }, []);

  useEffect(() => {
    probeBg();
    window.addEventListener("scroll", probeBg, { passive: true });
    return () => window.removeEventListener("scroll", probeBg);
  }, [probeBg]);

  useEffect(() => {
    setIsScrolled(false);
    requestAnimationFrame(probeBg);
  }, [pathname, probeBg]);

  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [isOpen, isMobile]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((v) => !v);
  const handleLogoClick = () => {
    closeMenu();
    window.scrollTo(0, 0);
    setIsScrolled(false);
    requestAnimationFrame(probeBg);
  };

  const needsWhiteLogo =
    (variant === "home" && !isScrolled) ||
    (isMobile && isOpen) ||
    (isScrolled && stickyBg === "dark");

  const logoSrc = needsWhiteLogo ? logoWhite : logoBlack;
  const mobileLogoSrc = needsWhiteLogo ? mobileLogoWhite : mobileLogoBlack;

  const linkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  const homeLinkClass = ({ isActive }) =>
    isActive ? `${styles.link1} ${styles.active}` : styles.link1;

  const burgerAria = isOpen ? "Закрыть меню" : "Открыть меню";

  return (
    <header
      className={`${styles.header} ${
        variant === "home" ? styles.homeHeader : ""
      }`}
    >
      <NavLink to="/" onClick={handleLogoClick} className={styles.desktopLogo}>
        <div
          className={`${isOpen ? styles.up : ""} ${
            isScrolled ? styles.logoSticky : ""
          }`}
        >
          <img src={logoSrc} alt="Logo" />
        </div>
      </NavLink>

      <div className={`${isOpen ? styles.up : ""} ${styles.mobileLogo}`}>
        <img src={mobileLogoSrc} alt="logo" />
      </div>

      <div
        className={`${styles.linksBlock} ${
          isOpen ? styles.linksBlockActive : ""
        }`}
      >
        <div className={isOpen ? styles.menuAndLinkHome : ""}>
          <button
            className={`${styles.burger} ${styles.burgerWhite} ${
              isOpen ? styles.burgerOpen : ""
            }`}
            onClick={toggleMenu}
            aria-label={burgerAria}
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <NavLink to="/" onClick={closeMenu} className={homeLinkClass}>
            Главная
          </NavLink>
        </div>

        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={closeMenu}
            className={linkClass}
          >
            {label}
          </NavLink>
        ))}

        <div className={styles.twoWaves}>
          {[0, 1].map((i) => (
            <svg
              key={i}
              viewBox="0 0 1440 80"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path d={WAVE_PATH} fill="#20A9F0" />
            </svg>
          ))}
        </div>
      </div>

      <button
        className={`${isOpen ? styles.burgerNone : styles.burger} ${
          variant === "home" ? styles.burgerWhite : ""
        } ${isOpen ? styles.burgerOpen : ""}`}
        onClick={toggleMenu}
        aria-label={burgerAria}
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

export default Header;
