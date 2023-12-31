import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import logo from '../../assets/img/main/logo.svg';
import fundLogo from '../../assets/img/main/fund.png';

export const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.footerWrapper}>
          <img src={logo} alt="logo" />
          <div className={styles.footerWrapper__about}>
            <div className={styles.footerWrapper__aboutContacts}>
              <h3>Контакты</h3>
              <p className={styles.footerWrapper__aboutContacts__phone}>
                Тел. +7 988 088 98 89
              </p>
              <p className={styles.footerWrapper__aboutContacts__address}>
                Адрес:
              </p>
            </div>
            <div className={styles.footerWrapper__aboutTime}>
              <h3>Режим работы</h3>
              <p className={styles.footerWrapper__aboutTime__hours}>
                8:00-18:00
              </p>
              <p className={styles.footerWrapper__aboutTime__days}>
                С пн по сб
              </p>
            </div>
            <div className={styles.footerWrapper__aboutSocial}>
              <h3>Наши социальные сети:</h3>
              <div className={styles.footerWrapper__aboutSocialItems}>
                <Link to="#" target="_blank">
                  <svg
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="61.3333"
                      height="61.3333"
                      rx="30.6667"
                      fill="#3578FF"
                    />
                    <path
                      d="M32.174 41.4003C20.6486 41.4003 14.0747 33.3422 13.8008 19.9336H19.574C19.7636 29.7752 24.0198 33.9439 27.391 34.8034V19.9336H32.8271V28.4214C36.1562 28.0561 39.6539 24.1882 40.8338 19.9336H46.2699C45.8253 22.1402 44.939 24.2295 43.6664 26.0708C42.3939 27.9121 40.7625 29.4658 38.8743 30.6347C40.982 31.7028 42.8436 33.2146 44.3364 35.0703C45.8291 36.926 46.919 39.0834 47.5341 41.4003H41.5502C40.998 39.3879 39.8757 37.5866 38.324 36.2219C36.7722 34.8573 34.8601 33.9901 32.8271 33.729V41.4003H32.174Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link to="#" target="_blank">
                  <svg
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.332031"
                      width="61.3333"
                      height="61.3333"
                      rx="30.6667"
                      fill="#3578FF"
                    />
                    <path
                      d="M43.2661 19.3238L38.6578 43.3819C38.6578 43.3819 38.0131 45.0499 36.2418 44.2499L25.6092 35.8077L25.5599 35.7828C26.9961 34.4473 38.1332 24.0778 38.6199 23.6078C39.3734 22.8798 38.9056 22.4464 38.0307 22.9963L21.5799 33.8149L15.2332 31.6036C15.2332 31.6036 14.2344 31.2357 14.1383 30.4357C14.041 29.6344 15.2661 29.201 15.2661 29.201L41.1396 18.6901C41.1396 18.6901 43.2661 17.7225 43.2661 19.3238Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link to="#" target="_blank">
                  <svg
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.667969"
                      width="61.3333"
                      height="61.3333"
                      rx="30.6667"
                      fill="#3578FF"
                    />
                    <path
                      d="M43.4878 18.4956C40.4585 15.4769 36.4195 13.7998 32.1561 13.7998C23.2927 13.7998 16.1122 20.9554 16.1122 29.788C16.1122 32.5831 16.8976 35.3783 18.2439 37.7262L16 45.9998L24.5268 43.7637C26.8829 44.9936 29.4634 45.6644 32.1561 45.6644C41.0195 45.6644 48.2 38.5088 48.2 29.6762C48.0878 25.5394 46.5171 21.5144 43.4878 18.4956ZM39.8976 35.4901C39.561 36.3845 37.9902 37.279 37.2049 37.3908C36.5317 37.5026 35.6341 37.5026 34.7366 37.279C34.1756 37.0554 33.3902 36.8318 32.4927 36.3845C28.4537 34.7074 25.8732 30.6824 25.6488 30.347C25.4244 30.1234 23.9659 28.2227 23.9659 26.2102C23.9659 24.1977 24.9756 23.3033 25.3122 22.8561C25.6488 22.4088 26.0976 22.4088 26.4341 22.4088C26.6585 22.4088 26.9951 22.4088 27.2195 22.4088C27.4439 22.4088 27.7805 22.297 28.1171 23.0797C28.4537 23.8623 29.239 25.8748 29.3512 25.9866C29.4634 26.2102 29.4634 26.4338 29.3512 26.6574C29.239 26.8811 29.1268 27.1047 28.9024 27.3283C28.678 27.5519 28.4537 27.8873 28.3415 27.9991C28.1171 28.2227 27.8927 28.4463 28.1171 28.7817C28.3415 29.229 29.1268 30.4588 30.361 31.5769C31.9317 32.9186 33.1659 33.3658 33.6146 33.5894C34.0634 33.813 34.2878 33.7012 34.5122 33.4776C34.7366 33.254 35.522 32.3595 35.7463 31.9123C35.9707 31.4651 36.3073 31.5769 36.6439 31.6887C36.9805 31.8005 39 32.8068 39.3366 33.0304C39.7854 33.254 40.0098 33.3658 40.1219 33.4776C40.2341 33.813 40.2341 34.5956 39.8976 35.4901Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.footerWrapper__fund}>
            <h1>Проект реализован при поддержке Фонда Содействия Инновациям</h1>
            <img src={fundLogo} alt="fund logo" />
          </div>
          <div className={styles.footerWrapper__copyright}>
            <Link to="/">Политика конфиденциальности</Link>
            <p>Все права защищены 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
