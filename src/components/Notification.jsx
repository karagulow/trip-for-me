import styles from './Header/Header.module.scss';

export const Notification = () => {
  return (
    <li className={styles.navUser__itemListNote}>
      <div className={styles.navUser__itemListNote__left}>
        <div className={styles.navUser__itemListNote__leftChecked}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.5" cy="7.5" r="7.5" fill="#3578FF" />
          </svg>
          <p>Непрочитанное</p>
        </div>
        <div className={styles.navUser__itemListNote__leftText}>
          Здравствуйте, хотите зарегистрироваться?
        </div>
      </div>
      <div className={styles.navUser__itemListNote__right}>
        <p>Сегодня</p>
        <p>8:00</p>
      </div>
    </li>
  );
};
