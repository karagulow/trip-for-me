import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../assets/img/main/logo.svg';
import avatar from '../../assets/img/main/avatar.png';

export const Header = () => {
  const [isAuth, setIsAuth] = React.useState(true); // ВРМЕННО! ПЕРЕНЕСТИ В REDUX!

  const menuClientRef = React.useRef();
  const menuGuideRef = React.useRef();
  const menuContactsRef = React.useRef();

  const [menuClientOpen, setMenuClientOpen] = React.useState(false);
  const [menuGuideOpen, setMenuGuideOpen] = React.useState(false);
  const [menuContactsOpen, setMenuContactsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleClickClientOutside = event => {
      if (!event.composedPath().includes(menuClientRef.current)) {
        setMenuClientOpen(false);
      }
    };
    const handleClickGuideOutside = event => {
      if (!event.composedPath().includes(menuGuideRef.current)) {
        setMenuGuideOpen(false);
      }
    };
    const handleClickContactsOutside = event => {
      if (!event.composedPath().includes(menuContactsRef.current)) {
        setMenuContactsOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickClientOutside);
    document.body.addEventListener('click', handleClickGuideOutside);
    document.body.addEventListener('click', handleClickContactsOutside);

    return () => {
      document.body.removeEventListener('click', handleClickClientOutside);
      document.body.removeEventListener('click', handleClickGuideOutside);
      document.body.removeEventListener('click', handleClickContactsOutside);
    };
  }, []);

  return (
    <header>
      <nav className={`${styles.nav} ${styles.fixedNavBar}`}>
        <div className="container">
          <div className={styles.navRow}>
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className={styles.navLogo}
            >
              <img src={logo} alt="logo" />
            </Link>
            <ul className={styles.navList}>
              <li className={styles.navList__itemUn}>
                <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                  Как это работает?
                </NavLink>
              </li>
              <li className={styles.navList__item} ref={menuClientRef}>
                <NavLink
                  to="/"
                  onClick={() => setMenuClientOpen(!menuClientOpen)}
                >
                  Путешествия
                </NavLink>
                {menuClientOpen && (
                  <ul>
                    <li>
                      <NavLink to="/">Все туры</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Чат с гидом</NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li className={styles.navList__item} ref={menuGuideRef}>
                <NavLink
                  to="/"
                  onClick={() => setMenuGuideOpen(!menuGuideOpen)}
                >
                  Организаторам туров
                </NavLink>
                {menuGuideOpen && (
                  <ul>
                    <li>
                      <NavLink to="/">Чат с клиентами</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Эксперты</NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li className={styles.navList__item} ref={menuContactsRef}>
                <NavLink
                  to="/"
                  onClick={() => setMenuContactsOpen(!menuContactsOpen)}
                >
                  Контакты
                </NavLink>
                {menuContactsOpen && (
                  <ul>
                    <li>
                      <NavLink to="/">О нас</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Поддержка</NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
            <div className={styles.navUser}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 0C24.0606 0 31 6.93935 31 15.5C31 24.0606 24.0606 31 15.5 31C6.93935 31 0 24.0606 0 15.5C0 6.93935 6.93935 0 15.5 0ZM15.5 21.7C15.0889 21.7 14.6947 21.8633 14.404 22.154C14.1133 22.4447 13.95 22.8389 13.95 23.25C13.95 23.6611 14.1133 24.0553 14.404 24.346C14.6947 24.6367 15.0889 24.8 15.5 24.8C15.9111 24.8 16.3053 24.6367 16.596 24.346C16.8867 24.0553 17.05 23.6611 17.05 23.25C17.05 22.8389 16.8867 22.4447 16.596 22.154C16.3053 21.8633 15.9111 21.7 15.5 21.7ZM15.5 6.975C14.0098 6.975 12.5807 7.56697 11.5269 8.62069C10.4732 9.67441 9.88125 11.1036 9.88125 12.5938C9.88125 13.0048 10.0446 13.3991 10.3352 13.6898C10.6259 13.9804 11.0202 14.1437 11.4312 14.1437C11.8423 14.1437 12.2366 13.9804 12.5273 13.6898C12.8179 13.3991 12.9812 13.0048 12.9812 12.5938C12.9818 12.1366 13.1067 11.6881 13.3427 11.2965C13.5787 10.9049 13.9168 10.585 14.3208 10.3709C14.7248 10.1569 15.1794 10.0568 15.6359 10.0815C16.0924 10.1062 16.5336 10.2546 16.9122 10.511C17.2908 10.7673 17.5924 11.1219 17.7849 11.5366C17.9773 11.9513 18.0531 12.4106 18.0044 12.8652C17.9556 13.3198 17.784 13.7525 17.5081 14.117C17.2321 14.4815 16.8621 14.764 16.4377 14.9342C15.3899 15.3527 13.95 16.4254 13.95 18.2125V18.6C13.95 19.0111 14.1133 19.4053 14.404 19.696C14.6947 19.9867 15.0889 20.15 15.5 20.15C15.9111 20.15 16.3053 19.9867 16.596 19.696C16.8867 19.4053 17.05 19.0111 17.05 18.6C17.05 18.2218 17.1275 18.0327 17.4545 17.8715L17.5894 17.8095C18.7997 17.3226 19.8029 16.4299 20.427 15.2844C21.0512 14.1389 21.2575 12.812 21.0104 11.531C20.7634 10.2501 20.0785 9.09503 19.0731 8.26378C18.0677 7.43253 16.8045 6.9769 15.5 6.975Z"
                  fill="white"
                />
              </svg>
              <svg
                width="27"
                height="32"
                viewBox="0 0 27 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.617 25.1383V26.617H0V25.1383L2.95745 22.1809V13.3085C2.95745 8.72447 5.95926 4.68755 10.3511 3.38628V2.95745C10.3511 2.17308 10.6627 1.42084 11.2173 0.866216C11.7719 0.311587 12.5241 0 13.3085 0C14.0929 0 14.8451 0.311587 15.3997 0.866216C15.9544 1.42084 16.266 2.17308 16.266 2.95745V3.38628C20.6578 4.68755 23.6596 8.72447 23.6596 13.3085V22.1809L26.617 25.1383ZM16.266 28.0957C16.266 28.8801 15.9544 29.6323 15.3997 30.187C14.8451 30.7416 14.0929 31.0532 13.3085 31.0532C12.5241 31.0532 11.7719 30.7416 11.2173 30.187C10.6627 29.6323 10.3511 28.8801 10.3511 28.0957"
                  fill="white"
                />
              </svg>
              {isAuth ? (
                <>
                  <img src={avatar} alt="avatar" />
                  <svg
                    width="22"
                    height="25"
                    viewBox="0 0 22 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7857 2H1.75V20.25C1.75 20.9415 2.02468 21.6046 2.51361 22.0935C3.00255 22.5825 3.66569 22.8571 4.35714 22.8571H14.7857M16.0893 16.3393L20 12.4286M20 12.4286L16.0893 8.51786M20 12.4286H6.96429"
                      stroke="#3578FF"
                      stroke-width="2.60714"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </>
              ) : (
                <button className={styles.navUser__login}>Вход</button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
