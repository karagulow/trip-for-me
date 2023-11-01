import styles from './TourItem.module.scss';

import tourImg from '../../assets/img/main/tour-img.png';

export const TourItem = () => {
  return (
    <li className={styles.tourItem}>
      <img src={tourImg} alt="tour image" />
      <div className={styles.tourItemText}>
        <h3 className={styles.tourItemText__title}>Атмосферный</h3>
        <p className={styles.tourItemText__description}>
          Почувствуйте эту летнюю атмосферу в компании приятных людей
        </p>
        <div className={styles.tourItemText__add}>
          <div className={styles.tourItemText__addLeft}>
            <div className={styles.tourItemText__addLeft__mark}>оценка</div>
            <p className={styles.tourItemText__addLeft__reviews}>200 отзывов</p>
          </div>
          <div className={styles.tourItemText__addRight}>
            <p className={styles.tourItemText__addRight__price}>1400 ₽</p>
            <p className={styles.tourItemText__addRight__man}>
              цена за человека
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
