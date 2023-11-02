import styles from './Collections.module.scss';
import { TourItem } from '../../components/TourItem';

export const Collections = () => {
  return (
    <div className={styles.collections}>
      <h1 className={styles.collectionsTitle}>Летний вайб</h1>
      <ul className={styles.collectionsList}>
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
