import { Link } from 'react-router-dom';

import styles from './TourPage.module.scss';
import tourImg from '../../assets/img/tour/moscow.jpg';
import guideAvatar from '../../assets/img/guide/avatar.png';
import programImgFirst from '../../assets/img/tour/program-image-1.png';
import programImgSecond from '../../assets/img/tour/program-image-2.png';
import { ProgramItem } from '../../components/ProgramItem';

export const TourPage = () => {
  return (
    <div className={styles.tour_page}>
      <h1 className={styles.tour_page__title}>Тур “Весенний вайб”</h1>
      <p className={styles.tour_page__city}>
        Центральный федеральный округ, Москва
      </p>
      <div className={styles.tour_page__images}>
        <img
          className={styles.tour_page__imagesLeft}
          src={tourImg}
          alt="tour photo"
        />
        <div className={styles.tour_page__imagesCenter}>
          <img src={tourImg} alt="tour photo" />
          <img src={tourImg} alt="tour photo" />
        </div>
        <img
          className={styles.tour_page__imagesRight}
          src={tourImg}
          alt="tour photo"
        />
      </div>

      <div className={styles.tour_page__about}>
        <div className={styles.tour_page__aboutLeft}>
          <div className={styles.tour_page__aboutProps}>
            <div className={styles.tour_page__aboutProps__item}>
              <h3>Группа</h3>
              <p>до 10 человек</p>
            </div>
            <div className={styles.tour_page__aboutProps__item}>
              <h3>Длительность</h3>
              <p>5 дней</p>
            </div>
            <div className={styles.tour_page__aboutProps__item}>
              <h3>Язык</h3>
              <p>русский</p>
            </div>
            <div className={styles.tour_page__aboutProps__item}>
              <h3>Тип тура</h3>
              <p>городской</p>
            </div>
          </div>
          <h1 className={styles.tour_page__aboutTitle}>Об экскурсии</h1>
          <p className={styles.tour_page__aboutText}>
            Весенний вайб - это захватывающий тур, который приглашает вас
            отправиться в увлекательное путешествие за пределы повседневной
            рутины и окунуться в прекрасный мир весны. Идеально подходящий
            вариант для тех, кто мечтает о восхождении над повседневностью и
            наслаждении весенними чудесами. <br />
            <br /> В течение этого тура вы пройдете через захватывающие места,
            где солнечные лучи создают волшебные игры света и тени. Вы сможете
            насладиться красотой распускающихся цветов, дыханием свежего
            весеннего воздуха и наполнить свою душу энергией и новыми
            впечатлениями.
          </p>
          <div className={styles.tour_page__aboutRoute}>
            <div className={styles.tour_page__aboutRoute__item}>
              <h3>Начало маршрута</h3>
              <p>Число, месяц</p>
              <p>Город</p>
            </div>
            <div className={styles.tour_page__aboutRoute__item}>
              <h3>Конец маршрута</h3>
              <p>Число, месяц</p>
              <p>Город</p>
            </div>
          </div>
        </div>
        <div className={styles.tour_page__aboutRight}>
          <div className={styles.tour_page__aboutOrder}>
            <div className={styles.tour_page__aboutOrder__price}>
              <div className={styles.tour_page__aboutOrder__priceValue}>
                <h3>1400 ₽</h3>
                <p>за человека</p>
              </div>
              <div className={styles.tour_page__aboutOrder__priceSale}>
                <p>Скидка</p>
                <h3>5%</h3>
              </div>
            </div>
            <button className={styles.tour_page__aboutOrder__btn}>
              <Link to="#">Оформить заказ</Link>
            </button>
            <div className={styles.tour_page__aboutOrder__rating}>
              <div className={styles.tour_page__aboutOrder__ratingStars}>
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
              <p className={styles.tour_page__aboutOrder__ratingFeed_back}>
                200 отзывов
              </p>
            </div>
          </div>
          <div className={styles.tour_page__aboutGuide}>
            <div className={styles.tour_page__aboutGuide__data}>
              <img src={guideAvatar} alt="guide avatar" />
              <h3>Гид Мария</h3>
            </div>
            <button className={styles.tour_page__aboutGuide__btn}>
              Написать в чат
            </button>
          </div>
        </div>
      </div>

      <div className={styles.tour_page__program}>
        <h1 className={styles.tour_page__programTitle}>В программе</h1>
        <ul className={styles.tour_page__programList}>
          <ProgramItem
            day="1"
            name="Весеннее пробуждение"
            text={
              <p>
                В этот день вы отправитесь в яркий сад, наполненный цветущими
                деревьями и кустарниками. Вы сможете насладиться исключительной
                красотой и ароматом цветов, которые пробуждаются после зимней
                спячки. Прогулка в этом саду поможет вам расслабиться и
                насладиться первыми лучами солнца, а также ощутить позитивное
                воздействие весны на ваше настроение. <br />
                <br /> В конце дня вас ожидает экскурсия в парк, где вы сможете
                насладиться прогулкой по цветущим аллеям и отдохнуть в тени
                старых деревьев. Парк является идеальным местом для
                фотографирования - вы сможете запечатлеть прекрасные весенние
                моменты и создать незабываемые воспоминания.
              </p>
            }
            programImage={programImgFirst}
          />
          <ProgramItem
            day="2"
            name="Велосипедные приключения и пикник на природе"
            text={
              <p>
                Второй день тура "Весенний вайб" означает активное время на
                природе. Вы отправитесь на велосипедные прогулки по
                окрестностям, ощущая свежий весенний воздух и наслаждаясь
                живописными пейзажами. Прокат велосипедов идеально подходит для
                любителей активного отдыха и предлагает возможность исследовать
                окружающие природные тропы и дорожки. <br />
                <br /> После велосипедной прогулки вас ожидает пикник на
                природе. Вы сможете насладиться свежими фруктами и закусками,
                наслаждаясь спокойствием и красотой окружающей природы. Пикник
                также предлагает идеальное время для общения с туристами из
                других групп и создания новых знакомств.
              </p>
            }
            programImage={programImgSecond}
          />
        </ul>
      </div>
      <div className={styles.tour_page__cancel}>
        <h2 className={styles.tour_page__cancelTitle}>Условия отмены</h2>
        <p className={styles.tour_page__cancelText}>
          Отменить бронирование и вернуть оплату можно только за 48 часов до
          даты начала тура. Возврат средств может занять до 3-х рабочих дней.
        </p>
      </div>
    </div>
  );
};
