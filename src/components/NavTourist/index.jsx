import { Link, NavLink } from 'react-router-dom';

import styles from './NavTourist.module.scss';

const setActive = ({ isActive }) => (isActive ? styles.active : '');

export const NavTourist = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navList__item}>
          <NavLink
            to="/lk/tourist/id"
            className={setActive}
            onClick={() => window.scrollTo(0, 0)}
          >
            Профиль
          </NavLink>
        </li>
        <li className={styles.navList__item}>
          <NavLink
            to="/lk/tourist/chat"
            className={setActive}
            onClick={() => window.scrollTo(0, 0)}
          >
            Чат
          </NavLink>
        </li>
        <li className={styles.navList__item}>
          <NavLink
            to="/lk/tourist/reviews"
            className={setActive}
            onClick={() => window.scrollTo(0, 0)}
          >
            Отзывы
          </NavLink>
        </li>
        <li className={styles.navList__item}>
          <NavLink
            to="/lk/tourist/reviews"
            className={setActive}
            onClick={() => window.scrollTo(0, 0)}
          >
            Поддержка
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
