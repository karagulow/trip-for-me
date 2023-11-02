import styles from './Tours.module.scss';
import { TourItem } from '../../components/TourItem';

export const Tours = () => {
  return (
    <div className={styles.tours}>
      <h1 className={styles.toursTitle}>Все регионы приключений</h1>
      <div className={styles.toursSort}>
        <p className={styles.toursSort__text}>Сортировка:</p>
        <form className={styles.toursSort__form}>
          <div className={styles.toursSort__formProps}>
            <input type="text" placeholder="Регион" />
            <input type="text" placeholder="Город" />
            <input type="text" placeholder="Цена" />
          </div>
          <button className={styles.toursSort__formBtn}>Применить</button>
        </form>
      </div>
      <ul className={styles.toursList}>
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
      </ul>
    </div>
  );
};
