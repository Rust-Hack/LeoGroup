import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from "./Contacts.module.css";

function Contacts() {
  return (
    <div>
      <div className={styles.background}>
        <Header />
        <div className={styles.contactsAndLocation}>
          <div className={styles.mapAndText}>
            <div className={styles.map}>
              <iframe
                src="https://yandex.by/map-widget/v1/?ll=27.505479%2C53.864554&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjY3MjI0MxJU0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0LfQsNCy0YPQu9Cw0Log0KHQvtGEJ9GWINCa0LDQstCw0LvQtdGe0YHQutCw0LksIDU00LoxIgoNOAvcQRVOdVdC&z=17.13&theme=dark"
                width="100%"
                title="Карта"
                frameBorder="0"
              />
            </div>
            <h1>Мы в Яндекс картах</h1>
          </div>
          <div className={styles.backgroundContacts}>
            <h1>Контактная информация</h1>
            <div className={styles.gridContacts}>
              <a href="tel:+375445729237">+375 44 572-92-37</a>
              <a href="tel:+375 33 333-65-33">+375 33 333-65-33</a>
              <a href="tel:+375 17 232-48-57">+375 17 232-48-57</a>
              <a href="tel:+375 17 232-17-82">+375 17 232-17-82</a>
              <a href="mailto:info@leo24.by">info@leo24.by</a>
            </div>
            <div className={styles.backgroundContactsText}>
              <h1>
                Для расчёта индивидуальных условий доставки, пожалуйста,
                свяжитесь с нами по телефону.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contacts;
