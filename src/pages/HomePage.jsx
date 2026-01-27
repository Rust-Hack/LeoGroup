import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from "./HomePage.module.css";
import logoWithText from "../assets/logoWithText.svg";
// import logoHome from "../assets/logoHome.svg"
import logoBlack from "../assets/logoBlack.svg"

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
            Ведущий поставщик трубопроводной арматуры и <br className={styles.brHide}/>
            инженерно-сантехнического оборудования в Беларуси. <br className={styles.brHide}/> Прямые контракты,
            комплексное оснащение объектов, <br className={styles.brHide}/> работа «под ключ».
          </p>
        </div>
      </div>
      <div className={styles.backgroundSecond}>
        <div className={styles.backgroundSecondFlex}>
          <img src={logoWithText} alt="logo" className={styles.logoSizeWithText}/>
          <p>
            Мы являемся первым импортёром, прямым поставщиком инженерного
            оборудования, наш ассортимент постоянно обновляется и расширяется,
            чтобы удовлетворять запросы наших клиентов!”
          </p>
        </div>
        <div>
          <img src={logoBlack} alt="logo" className={styles.logoSize}/>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
