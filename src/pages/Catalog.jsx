import styles from './Catalog.module.css';
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

import icon1 from '../assets/catalog/1.svg';
import icon2 from '../assets/catalog/2.svg';
import icon3 from '../assets/catalog/3.svg';
import icon4 from '../assets/catalog/4.svg';
import icon5 from '../assets/catalog/5.svg';
import icon6 from '../assets/catalog/6.svg';
import icon7 from '../assets/catalog/7.svg';
import icon8 from '../assets/catalog/8.svg';
import icon9 from '../assets/catalog/9.svg';
import icon10 from '../assets/catalog/10.svg';

const categories = [
  { id: 1, icon: icon1, label: 'Трубопроводная арматура' },
  { id: 2, icon: icon2, label: 'Детали трубопроводов' },
  { id: 3, icon: icon3, label: 'Трубы и фитинги' },
  { id: 4, icon: icon4, label: 'Фильтры и грязевики' },
  { id: 5, icon: icon5, label: 'Хомуты и метизы' },
  { id: 6, icon: icon6, label: 'Канализация' },
  { id: 7, icon: icon7, label: 'Контрольно-измерительные приборы' },
  { id: 8, icon: icon8, label: 'Уплотнительные и сажесмазывающие материалы' },
  { id: 9, icon: icon9, label: 'Отопительное оборудование' },
  { id: 10, icon: icon10, label: 'Люки и дождеприёмники' },
];

function Catalog() {
  return (
    <div>
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <div className={styles.grid}>
            {categories.map(cat => (
              <div key={cat.id} className={styles.card}>
                <img src={cat.icon} alt={cat.label} className={styles.icon} />
                <span className={styles.label}>{cat.label}</span>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Catalog;
