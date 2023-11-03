import { Link } from 'react-router-dom';

import styles from './TourItem.module.scss';
import tourImg from '../../assets/img/main/tour-img.png';

export const TourItem = () => {
  return (
    <li className={styles.tourItem}>
      <Link to="tours/id" onClick={() => window.scrollTo(0, 0)}>
        <img src={tourImg} alt="tour image" />
        <div className={styles.tourItemText}>
          <h3 className={styles.tourItemText__title}>Атмосферный</h3>
          <p className={styles.tourItemText__description}>
            Почувствуйте эту летнюю атмосферу в компании приятных людей
          </p>
          <div className={styles.tourItemText__add}>
            <div className={styles.tourItemText__addLeft}>
              <div className={styles.tourItemText__addLeft__rating}>
                {[...Array(5)].map(() => {
                  return (
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.4753 9.21675L16.25 12.9043L17.5158 18.3943C17.5827 18.6813 17.5636 18.9817 17.4608 19.2579C17.358 19.5341 17.1761 19.7739 16.9377 19.9472C16.6994 20.1206 16.4152 20.2199 16.1208 20.2326C15.8263 20.2453 15.5347 20.171 15.2823 20.0189L10.4939 17.1146L5.71587 20.0189C5.46345 20.171 5.17179 20.2453 4.87734 20.2326C4.5829 20.2199 4.29875 20.1206 4.06041 19.9472C3.82207 19.7739 3.64013 19.5341 3.53731 19.2579C3.4345 18.9817 3.41539 18.6813 3.48237 18.3943L4.74621 12.9099L0.519984 9.21675C0.296455 9.02396 0.13482 8.76947 0.0553486 8.48519C-0.0241227 8.20091 -0.0178924 7.89949 0.0732578 7.61874C0.164408 7.33798 0.336421 7.09039 0.567725 6.907C0.79903 6.72362 1.07933 6.61261 1.37347 6.58789L6.94411 6.1054L9.11858 0.918883C9.23214 0.646737 9.42367 0.414273 9.66908 0.250761C9.91448 0.087249 10.2028 0 10.4977 0C10.7925 0 11.0808 0.087249 11.3262 0.250761C11.5716 0.414273 11.7632 0.646737 11.8767 0.918883L14.0578 6.1054L19.6265 6.58789C19.9207 6.61261 20.201 6.72362 20.4323 6.907C20.6636 7.09039 20.8356 7.33798 20.9267 7.61874C21.0179 7.89949 21.0241 8.20091 20.9447 8.48519C20.8652 8.76947 20.7035 9.02396 20.48 9.21675H20.4753Z"
                        fill="#3578FF"
                      />
                    </svg>
                  );
                })}
              </div>
              <p className={styles.tourItemText__addLeft__reviews}>
                200 отзывов
              </p>
            </div>
            <div className={styles.tourItemText__addRight}>
              <p className={styles.tourItemText__addRight__price}>1400 ₽</p>
              <p className={styles.tourItemText__addRight__man}>
                цена за человека
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
