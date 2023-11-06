import styles from './TouristProfile.module.scss';
import avatar from '../../assets/img/main/avatar.png';
import { NavTourist } from '../../components/NavTourist';
import { TourItem } from '../../components/TourItem';

export const TouristProfile = () => {
  return (
    <div className={styles.tourist_profile}>
      <NavTourist />
      <div className={styles.tourist_profileContent}>
        <div className={styles.tourist_profileContent__user}>
          <div className={styles.tourist_profileContent__userAvatar}>
            <img src={avatar} alt="avatar" />
            <div className={styles.tourist_profileContent__userAvatar__edit}>
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
          <div className={styles.tourist_profileContent__userAbout}>
            <p className={styles.tourist_profileContent__userAbout__name}>
              Егорова Мария
            </p>
            <div className={styles.tourist_profileContent__userAbout__bottom}>
              <div
                className={styles.tourist_profileContent__userAbout__bottomItem}
              >
                <p
                  className={
                    styles.tourist_profileContent__userAbout__bottomItem__title
                  }
                >
                  Посещено туров:
                </p>
                <p
                  className={
                    styles.tourist_profileContent__userAbout__bottomItem__count
                  }
                >
                  0
                </p>
              </div>
              <div
                className={styles.tourist_profileContent__userAbout__bottomItem}
              >
                <p
                  className={
                    styles.tourist_profileContent__userAbout__bottomItem__title
                  }
                >
                  Количество отзывов:
                </p>
                <p
                  className={
                    styles.tourist_profileContent__userAbout__bottomItem__count
                  }
                >
                  0
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tourist_profileContent__tours}>
          <h3 className={styles.tourist_profileContent__toursTitle}>
            Мои туры
          </h3>
          <ul className={styles.tourist_profileContent__toursList}>
            <TourItem />
            <TourItem />
            <TourItem />
          </ul>
        </div>
      </div>
    </div>
  );
};
