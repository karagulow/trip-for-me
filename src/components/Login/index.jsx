import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import React from 'react';
import classNames from 'classnames';

export const Login = ({
  setLoginOpen,
  setLoginCheckOpen,
  organizerAuth,
  setOrganizerAuth,
}) => {
  return (
    <div className={styles.login}>
      <div className={styles.loginBlock}>
        <div
          className={styles.loginBlock__close}
          onClick={() => {
            setLoginOpen(false);
            document.body.style.overflow = 'auto';
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.87663 0.638163L13 9.76153L22.0761 0.685434C22.2766 0.472045 22.5181 0.301342 22.7861 0.18356C23.0542 0.0657777 23.3433 0.0033429 23.636 0C24.2629 0 24.8641 0.249018 25.3073 0.692273C25.7506 1.13553 25.9996 1.73671 25.9996 2.36357C26.0051 2.65334 25.9514 2.94119 25.8416 3.20944C25.7319 3.47769 25.5685 3.72069 25.3615 3.92352L16.1672 12.9996L25.3615 22.1939C25.751 22.575 25.9794 23.0911 25.9996 23.6357C25.9996 24.2625 25.7506 24.8637 25.3073 25.307C24.8641 25.7502 24.2629 25.9992 23.636 25.9992C23.3348 26.0117 23.0343 25.9615 22.7535 25.8516C22.4728 25.7417 22.2179 25.5747 22.0052 25.3611L13 16.2377L3.90027 25.3374C3.70056 25.5437 3.46198 25.7084 3.19829 25.822C2.93461 25.9356 2.65104 25.9958 2.36395 25.9992C1.73709 25.9992 1.13591 25.7502 0.692657 25.307C0.249402 24.8637 0.000384568 24.2625 0.000384568 23.6357C-0.00512607 23.3459 0.0486378 23.058 0.158377 22.7898C0.268116 22.5215 0.431516 22.2785 0.638547 22.0757L9.83282 12.9996L0.638547 3.80534C0.248996 3.42424 0.0205685 2.90816 0.000384568 2.36357C0.000384568 1.73671 0.249402 1.13553 0.692657 0.692273C1.13591 0.249018 1.73709 0 2.36395 0C2.93121 0.0070907 3.47483 0.236357 3.87663 0.638163Z"
              fill="#3578FF"
            />
          </svg>
        </div>
        <h2 className={styles.loginBlock__title}>Вход или регистрация</h2>
        <form className={styles.loginBlock__form}>
          <input type="text" placeholder="E-mail или телефон" />
          <input type="password" placeholder="Пароль" />
          <button
            type="button"
            className={styles.loginBlock__formBtn}
            onClick={() => {
              setLoginOpen(false);
              setLoginCheckOpen(true);
            }}
          >
            Продолжить
          </button>
        </form>
        <div
          className={styles.loginBlock__role}
          onClick={() => setOrganizerAuth(!organizerAuth)}
        >
          <div
            className={classNames(
              styles.loginBlock__roleCircle,
              organizerAuth && styles.organizer
            )}
          ></div>
          <p className={styles.loginBlock__roleText}>Я организатор</p>
        </div>
        <Link className={styles.loginBlock__forgot_password}>
          Забыли пароль?
        </Link>
        <div className={styles.loginBlock__other}>
          <p>Войти с помощью</p>
          <div className={styles.loginBlock__otherItems}>
            <svg
              width="71"
              height="71"
              viewBox="0 0 71 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M71 35.5C71 15.8939 55.1061 0 35.5 0C15.8939 0 0 15.8939 0 35.5C0 55.1061 15.8939 71 35.5 71C55.1061 71 71 55.1061 71 35.5Z"
                fill="#3578FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M52.8721 35.9031C52.8721 34.6445 52.7591 33.4343 52.5493 32.2725H35.832V39.1385H45.3848C44.9733 41.3573 43.7227 43.2371 41.8428 44.4958V48.9494H47.5793C50.9357 45.8593 52.8721 41.3088 52.8721 35.9031Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.8308 53.2506C40.6233 53.2506 44.6413 51.6611 47.5781 48.9502L41.8416 44.4966C40.2522 45.5616 38.219 46.1909 35.8308 46.1909C31.2078 46.1909 27.2947 43.0685 25.8989 38.873H19.9688V43.4719C22.8894 49.273 28.8922 53.2506 35.8308 53.2506Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.9001 38.8742C25.5451 37.8092 25.3434 36.6715 25.3434 35.5017C25.3434 34.3318 25.5451 33.1941 25.9001 32.1291V27.5303H19.97C18.7678 29.9265 18.082 32.6374 18.082 35.5017C18.082 38.3659 18.7678 41.0768 19.97 43.473L25.9001 38.8742Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.8308 24.8097C38.4369 24.8097 40.7766 25.7052 42.6162 27.4641L47.7072 22.3731C44.6332 19.5089 40.6153 17.75 35.8308 17.75C28.8922 17.75 22.8894 21.7276 19.9688 27.5287L25.8989 32.1275C27.2947 27.9321 31.2078 24.8097 35.8308 24.8097Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
