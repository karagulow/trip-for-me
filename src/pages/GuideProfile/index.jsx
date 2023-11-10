import React from 'react';
import { Link } from 'react-router-dom';

import styles from './GuideProfile.module.scss';
import avatar from '../../assets/img/main/avatar.png';

import { NavGuide } from '../../components/NavGuide';
import { TourItem } from '../../components/TourItem';
import { AddCard } from '../../components/AddCard';

export const GuideProfile = () => {
  const [isProfileMain, setIsProfileMain] = React.useState(true);
  const [addCardOpen, setAddCardOpen] = React.useState(false);

  return (
    <div className={styles.guide_profile}>
      <NavGuide setIsProfileMain={setIsProfileMain} />
      {isProfileMain ? (
        <div className={styles.guide_profileContent}>
          <div className={styles.guide_profileContent__user}>
            <div className={styles.guide_profileContent__userAvatar}>
              <img src={avatar} alt="avatar" />
              <div className={styles.guide_profileContent__userAvatar__edit}>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="39" height="39" rx="9" fill="#292F3A" />
                  <path
                    d="M19.2713 30.875H31.23M23.2575 10.9437L27.2438 14.93M25.2507 8.95058C25.7793 8.42197 26.4962 8.125 27.2438 8.125C27.6139 8.125 27.9805 8.19791 28.3225 8.33956C28.6644 8.48121 28.9752 8.68884 29.2369 8.95058C29.4987 9.21232 29.7063 9.52305 29.8479 9.86504C29.9896 10.207 30.0625 10.5736 30.0625 10.9437C30.0625 11.3139 29.9896 11.6804 29.8479 12.0224C29.7063 12.3644 29.4987 12.6751 29.2369 12.9368L12.6275 29.5462L7.3125 30.875L8.64125 25.56L25.2507 8.95058Z"
                    stroke="#3578FF"
                    stroke-width="2.65751"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.guide_profileContent__userAbout}>
              <div className={styles.guide_profileContent__userAbout__top}>
                <p className={styles.guide_profileContent__userAbout__topName}>
                  Егорова Мария
                </p>
                <p
                  className={styles.guide_profileContent__userAbout__topBalance}
                >
                  0 рублей
                </p>
                <button
                  className={styles.guide_profileContent__userAbout__topBtn}
                  onClick={() => setIsProfileMain(false)}
                >
                  Подробнее
                </button>
              </div>
              <div className={styles.guide_profileContent__userAbout__bottom}>
                <div
                  className={styles.guide_profileContent__userAbout__bottomItem}
                >
                  <p
                    className={
                      styles.guide_profileContent__userAbout__bottomItem__title
                    }
                  >
                    Проведено туров:
                  </p>
                  <p
                    className={
                      styles.guide_profileContent__userAbout__bottomItem__count
                    }
                  >
                    0
                  </p>
                </div>
                <div
                  className={styles.guide_profileContent__userAbout__bottomItem}
                >
                  <p
                    className={
                      styles.guide_profileContent__userAbout__bottomItem__title
                    }
                  >
                    Опубликовано туров:
                  </p>
                  <p
                    className={
                      styles.guide_profileContent__userAbout__bottomItem__count
                    }
                  >
                    0
                  </p>
                </div>
                <div
                  className={styles.guide_profileContent__userAbout__bottomItem}
                >
                  <p
                    className={
                      styles.guide_profileContent__userAbout__bottomItem__title
                    }
                  >
                    Рейтинг туров:
                  </p>
                  <p
                    className={
                      styles.guide_profileContent__userAbout__bottomItem__count
                    }
                  >
                    0
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.guide_profileContent__tours}>
            <div className={styles.guide_profileContent__toursTop}>
              <div className={styles.guide_profileContent__toursTop__left}>
                <h3
                  className={styles.guide_profileContent__toursTop__leftTitle}
                >
                  Мои туры
                </h3>
                <button
                  className={styles.guide_profileContent__toursTop__leftBtn}
                >
                  <Link to="/lk/guide/create-tour">Создать тур</Link>
                </button>
              </div>
              <div className={styles.guide_profileContent__toursTop__right}>
                <button
                  className={styles.guide_profileContent__toursTop__rightActive}
                >
                  Активные
                </button>
                <button
                  className={styles.guide_profileContent__toursTop__rightPast}
                >
                  Прошедшие
                </button>
              </div>
            </div>
            <ul className={styles.guide_profileContent__toursList}>
              <TourItem />
              <TourItem />
              <TourItem />
            </ul>
          </div>
        </div>
      ) : (
        <div className={styles.guide_profileAdd}>
          <div className={styles.guide_profileAdd__balance}>
            <h3 className={styles.guide_profileAdd__balanceTitle}>
              Заработано за все время
            </h3>
            <p className={styles.guide_profileAdd__balanceCount}>0 рублей</p>
          </div>
          <div className={styles.guide_profileAdd__balance}>
            <h3 className={styles.guide_profileAdd__balanceTitle}>
              Доступно к выводу
            </h3>
            <p className={styles.guide_profileAdd__balanceCount}>0 рублей</p>
          </div>
          <div className={styles.guide_profileAdd__cards}>
            <h3 className={styles.guide_profileAdd__cardsTitle}>Мои карты</h3>
            <ul className={styles.guide_profileAdd__cardsList}>
              <li className={styles.guide_profileAdd__cardsList__item}>
                <div
                  className={styles.guide_profileAdd__cardsList__itemCircle}
                ></div>
                <p className={styles.guide_profileAdd__cardsList__itemText}>
                  Mir ****8229
                </p>
              </li>
            </ul>
            <button
              className={styles.guide_profileAdd__cardsBtn}
              onClick={() => {
                setAddCardOpen(true);
                document.body.style.overflow = 'hidden';
              }}
            >
              Добавить карту
            </button>
            {addCardOpen && <AddCard setAddCardOpen={setAddCardOpen} />}
          </div>
        </div>
      )}
    </div>
  );
};
