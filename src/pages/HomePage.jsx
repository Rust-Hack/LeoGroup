import styles from "./HomePage.module.css";
import logoWithText from "../assets/logoWithText.svg";
import logoBlack from "../assets/logoBlack.svg";
import bg from "../assets/backgroundHomePage.jpg";
import Consultation from "../components/Consultation";

function HomePage() {
  return (
    <div>
      <Consultation />
      <div className={styles.background} data-bg="dark">
        <img src={bg} alt="" className={styles.bg} />
        <div className={styles.homeText}>
          <h1>
            Основа ваших проектов- <br />
            наша ответственность
          </h1>
          <p>
            Ведущий поставщик трубопроводной арматуры и{" "}
            <br className={styles.brHide} />
            инженерно-сантехнического оборудования в Беларуси.{" "}
            <br className={styles.brHide} />
          </p>
        </div>
      </div>
      <div className={styles.backgroundSecond} data-bg="light">
        <div className={styles.backgroundSecondFlex}>
          <img
            src={logoWithText}
            alt="logo"
            className={styles.logoSizeWithText}
          />
          <p>
            Мы являемся первым импортёром сантехнического оборудования и
            инженерных систем. Наш ассортимент и наличие на складе постоянно
            обновляется и расширяется, чтобы удовлетворять запросы наших
            клиентов!
          </p>
        </div>
        <div>
          <img src={logoBlack} alt="logo" className={styles.logoSize} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
