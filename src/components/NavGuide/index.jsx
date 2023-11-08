import { NavLink } from 'react-router-dom';

import styles from './NavGuide.module.scss';

const setActive = ({ isActive }) => (isActive ? styles.active : '');

export const NavGuide = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navList__item}>
          <NavLink
            to="/lk/guide/id"
            className={setActive}
            onClick={() => window.scrollTo(0, 0)}
          >
            Профиль
          </NavLink>
        </li>
        <li className={styles.navList__item}>
          <NavLink
            to="/lk/guide/chat"
            className={setActive}
            onClick={() => window.scrollTo(0, 0)}
          >
            Чат
          </NavLink>
        </li>
        <li className={styles.navList__item}>
          <NavLink
            to="/lk/guide/reviews"
            className={setActive}
            onClick={() => window.scrollTo(0, 0)}
          >
            Отзывы
          </NavLink>
        </li>
        <li className={styles.navList__item}>
          <NavLink
            to="/lk/guide/analytics"
            className={setActive}
            onClick={() => window.scrollTo(0, 0)}
          >
            Аналитика
          </NavLink>
        </li>
        <li className={styles.navList__item}>
          <NavLink
            to="/lk/guide/support"
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
