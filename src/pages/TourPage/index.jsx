import styles from './TourPage.module.scss';
import tourImg from '../../assets/img/tour/moscow.jpg';
import guideAvatar from '../../assets/img/guide/avatar.png';

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
          <div></div>
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
    </div>
  );
};
