import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../assets/img/main/logo.svg';
import avatar from '../../assets/img/main/avatar.png';
import { Notification } from '../Notification';

export const Header = () => {
  const [isAuth, setIsAuth] = React.useState(false); // ВРМЕННО! ПЕРЕНЕСТИ В REDUX!

  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    footerElement.scrollIntoView({ behavior: 'smooth' });
    setMenuNavOpen(false);
  };

  const menuClientRef = React.useRef();
  const menuGuideRef = React.useRef();
  const menuContactsRef = React.useRef();
  const menuNotificationRef = React.useRef();

  const [menuClientOpen, setMenuClientOpen] = React.useState(false);
  const [menuGuideOpen, setMenuGuideOpen] = React.useState(false);
  const [menuContactsOpen, setMenuContactsOpen] = React.useState(false);
  const [menuNotificationOpen, setMenuNotificationOpen] = React.useState(false);

  const [menuNavOpen, setMenuNavOpen] = React.useState(false);

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
    const handleClickNotificationOutside = event => {
      if (!event.composedPath().includes(menuNotificationRef.current)) {
        setMenuNotificationOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickClientOutside);
    document.body.addEventListener('click', handleClickGuideOutside);
    document.body.addEventListener('click', handleClickContactsOutside);
    document.body.addEventListener('click', handleClickNotificationOutside);

    return () => {
      document.body.removeEventListener('click', handleClickClientOutside);
      document.body.removeEventListener('click', handleClickGuideOutside);
      document.body.removeEventListener('click', handleClickContactsOutside);
      document.body.removeEventListener(
        'click',
        handleClickNotificationOutside
      );
    };
  }, []);

  console.log(menuNavOpen);

  return (
    <header>
      <nav className={`${styles.nav} ${styles.fixedNavBar}`}>
        <div className="container">
          <div className={styles.navRow}>
            <div className={styles.navRow__link}>
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className={styles.navLogo}
              >
                <img src={logo} alt="logo" />
              </Link>
              {menuNavOpen ? (
                <>
                  <div
                    className={styles.navRow__linkMenu}
                    onClick={() => {
                      setMenuNavOpen(false);
                    }}
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5792 1.6579C15.5794 1.23213 15.7434 0.822765 16.0372 0.514627C16.331 0.20649 16.7321 0.0231972 17.1574 0.00273705C17.5827 -0.0177231 17.9995 0.126211 18.3215 0.40472C18.6436 0.683228 18.8461 1.07496 18.8872 1.49874L18.8949 1.6579V19.3421C18.8947 19.7679 18.7307 20.1772 18.4369 20.4854C18.1431 20.7935 17.742 20.9768 17.3167 20.9973C16.8914 21.0177 16.4746 20.8738 16.1526 20.5953C15.8305 20.3168 15.628 19.925 15.5869 19.5013L15.5792 19.3421L15.5792 1.6579ZM7.84231 1.6579C7.84231 1.21819 8.01698 0.796503 8.3279 0.485588C8.63881 0.174673 9.0605 0 9.50021 0C9.93991 0 10.3616 0.174673 10.6725 0.485588C10.9834 0.796503 11.1581 1.21819 11.1581 1.6579L11.1581 19.3421C11.1581 19.7818 10.9834 20.2035 10.6725 20.5144C10.3616 20.8253 9.93991 21 9.50021 21C9.0605 21 8.63881 20.8253 8.3279 20.5144C8.01698 20.2035 7.84231 19.7818 7.84231 19.3421L7.84231 1.6579ZM0.105469 1.6579C0.105469 1.21819 0.280139 0.796503 0.591055 0.485588C0.901971 0.174673 1.32366 0 1.76336 0C2.20306 0 2.62476 0.174673 2.93567 0.485588C3.24659 0.796503 3.42126 1.21819 3.42126 1.6579L3.42126 19.3421C3.42126 19.7818 3.24659 20.2035 2.93567 20.5144C2.62476 20.8253 2.20306 21 1.76336 21C1.32366 21 0.901971 20.8253 0.591055 20.5144C0.280139 20.2035 0.105469 19.7818 0.105469 19.3421L0.105469 1.6579Z"
                        fill="#3578FF"
                      />
                    </svg>
                  </div>
                  <ul className={styles.navMobList}>
                    <li className={styles.navMobList__itemUn}>
                      <Link
                        to=""
                        onClick={() => {
                          setMenuNavOpen(false);
                          window.scrollTo(0, 0);
                        }}
                      >
                        Как это работает?
                      </Link>
                    </li>
                    <li className={styles.navMobList__item}>
                      <div className={styles.navMobList__itemTitle}>
                        Путешествия
                      </div>
                      <ul>
                        <li>
                          <div className={styles.circle}></div>
                          <Link
                            to="/"
                            onClick={() => {
                              setMenuNavOpen(false);
                              window.scrollTo(0, 0);
                            }}
                          >
                            Все туры
                          </Link>
                        </li>
                        <li>
                          <div className={styles.circle}></div>
                          <Link
                            to="/"
                            onClick={() => {
                              setMenuNavOpen(false);
                              window.scrollTo(0, 0);
                            }}
                          >
                            Чат с гидом
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={styles.navMobList__item}>
                      <div className={styles.navMobList__itemTitle}>
                        Организаторам туров
                      </div>
                      <ul>
                        <li>
                          <div className={styles.circle}></div>
                          <Link
                            to="/"
                            onClick={() => {
                              setMenuNavOpen(false);
                              window.scrollTo(0, 0);
                            }}
                          >
                            Чат с клиентами
                          </Link>
                        </li>
                        <li>
                          <div className={styles.circle}></div>
                          <Link
                            to="/"
                            onClick={() => {
                              setMenuNavOpen(false);
                              window.scrollTo(0, 0);
                            }}
                          >
                            Эксперты
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={styles.navMobList__item}>
                      <div className={styles.navMobList__itemTitle}>
                        Контакты
                      </div>
                      <ul>
                        <li>
                          <div className={styles.circle}></div>
                          <Link
                            to="/about-us"
                            onClick={() => {
                              setMenuNavOpen(false);
                              window.scrollTo(0, 0);
                            }}
                          >
                            О нас
                          </Link>
                        </li>
                        <li>
                          <div className={styles.circle}></div>
                          <div onClick={scrollToFooter}>Поддержка</div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <hr />
                    </li>
                  </ul>
                </>
              ) : (
                <div
                  className={styles.navRow__linkMenu}
                  onClick={() => {
                    setMenuNavOpen(true);
                  }}
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.3421 15.4737C19.7679 15.4739 20.1772 15.6379 20.4854 15.9317C20.7935 16.2255 20.9768 16.6266 20.9973 17.0519C21.0177 17.4772 20.8738 17.894 20.5953 18.2161C20.3168 18.5381 19.925 18.7407 19.5013 18.7817L19.3421 18.7895H1.65789C1.23213 18.7893 0.822764 18.6253 0.514625 18.3314C0.206487 18.0376 0.0231972 17.6365 0.00273634 17.2113C-0.0177246 16.786 0.126212 16.3691 0.40472 16.0471C0.683228 15.7251 1.07496 15.5225 1.49874 15.4814L1.65789 15.4737H19.3421ZM19.3421 7.73684C19.7818 7.73684 20.2035 7.91151 20.5144 8.22243C20.8253 8.53334 21 8.95504 21 9.39474C21 9.83444 20.8253 10.2561 20.5144 10.567C20.2035 10.878 19.7818 11.0526 19.3421 11.0526H1.65789C1.21819 11.0526 0.796502 10.878 0.485586 10.567C0.174671 10.2561 0 9.83444 0 9.39474C0 8.95504 0.174671 8.53334 0.485586 8.22243C0.796502 7.91151 1.21819 7.73684 1.65789 7.73684H19.3421ZM19.3421 0C19.7818 0 20.2035 0.174671 20.5144 0.485586C20.8253 0.796502 21 1.21819 21 1.65789C21 2.0976 20.8253 2.51929 20.5144 2.8302C20.2035 3.14112 19.7818 3.31579 19.3421 3.31579H1.65789C1.21819 3.31579 0.796502 3.14112 0.485586 2.8302C0.174671 2.51929 0 2.0976 0 1.65789C0 1.21819 0.174671 0.796502 0.485586 0.485586C0.796502 0.174671 1.21819 0 1.65789 0H19.3421Z"
                      fill="#3578FF"
                    />
                  </svg>
                </div>
              )}
            </div>
            <ul className={styles.navList}>
              <li className={styles.navList__itemUn}>
                <div onClick={() => window.scrollTo(0, 0)}>
                  Как это работает?
                </div>
              </li>
              <li className={styles.navList__item} ref={menuClientRef}>
                <div to="/" onClick={() => setMenuClientOpen(!menuClientOpen)}>
                  Путешествия
                </div>
                {menuClientOpen && (
                  <ul>
                    <li>
                      <Link to="/">Все туры</Link>
                    </li>
                    <li>
                      <Link to="/">Чат с гидом</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={styles.navList__item} ref={menuGuideRef}>
                <div to="/" onClick={() => setMenuGuideOpen(!menuGuideOpen)}>
                  Организаторам туров
                </div>
                {menuGuideOpen && (
                  <ul>
                    <li>
                      <Link to="/">Чат с клиентами</Link>
                    </li>
                    <li>
                      <Link to="/">Эксперты</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={styles.navList__item} ref={menuContactsRef}>
                <div
                  to="/"
                  onClick={() => setMenuContactsOpen(!menuContactsOpen)}
                >
                  Контакты
                </div>
                {menuContactsOpen && (
                  <ul>
                    <li>
                      <Link to="/about-us">О нас</Link>
                    </li>
                    <li>
                      <div onClick={scrollToFooter}>Поддержка</div>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
            <ul className={styles.navUser}>
              <li className={styles.navUser__item}>
                <Link to="/">
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
                </Link>
              </li>
              <li className={styles.navUser__item} ref={menuNotificationRef}>
                <div
                  onClick={() => setMenuNotificationOpen(!menuNotificationOpen)}
                >
                  <svg
                    width="27"
                    height="31"
                    viewBox="0 0 27 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.617 25.1383V26.617H0V25.1383L2.95745 22.1809V13.3085C2.95745 8.72447 5.95926 4.68755 10.3511 3.38628V2.95745C10.3511 2.17308 10.6627 1.42084 11.2173 0.866216C11.7719 0.311587 12.5241 0 13.3085 0C14.0929 0 14.8451 0.311587 15.3997 0.866216C15.9544 1.42084 16.266 2.17308 16.266 2.95745V3.38628C20.6578 4.68755 23.6596 8.72447 23.6596 13.3085V22.1809L26.617 25.1383ZM16.266 28.0957C16.266 28.8801 15.9544 29.6323 15.3997 30.187C14.8451 30.7416 14.0929 31.0532 13.3085 31.0532C12.5241 31.0532 11.7719 30.7416 11.2173 30.187C10.6627 29.6323 10.3511 28.8801 10.3511 28.0957"
                      fill="white"
                    />
                  </svg>
                </div>
                {menuNotificationOpen && (
                  <ul className={styles.navUser__itemList}>
                    <Notification />
                    <Notification />
                    <Notification />
                  </ul>
                )}
              </li>

              {isAuth ? (
                <div className={styles.navUser__is_auth}>
                  <Link to="/">
                    <img src={avatar} alt="avatar" />
                  </Link>

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
                </div>
              ) : (
                <button className={styles.navUser__login}>Вход</button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
