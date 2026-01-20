import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from "./HomePage.module.css";
import logoWithText from "../assets/logoWithText.svg";
import logoHome from "../assets/logoHome.svg"

function HomePage() {
  return (
    <div>
      <div className={styles.background}>
        <Header variant="home" />
        <div className={styles.homeText}>
          <h1>
            Основа ваших проектов. <br />
            Наша ответственность.
          </h1>
          <p>
            Ведущий поставщик трубопроводной арматуры и
            инженерно-сантехнического оборудования в Беларуси. Прямые контракты,
            комплексное оснащение объектов, работа «под ключ».
          </p>
        </div>
      </div>
      <div className={styles.backgroundSecond}>
        <div className={styles.backgroundSecondFlex}>
          <img src={logoWithText} alt="logo" />
          <p>
            Мы являемся первым импортёром, прямым поставщиком инженерного
            оборудования, наш ассортимент постоянно обновляется и расширяется,
            чтобы удовлетворять запросы наших клиентов!”
          </p>
        </div>
        <div>
          <img src={logoHome} alt="logo" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
