import avatar from '../../assets/img/main/avatar.png';
import styles from './TouristReviews.module.scss';
import { NavTourist } from '../../components/NavTourist';
import { Feedback } from '../../components/Feedback';
import { Search } from '../../components/Search';

export const TouristReviews = () => {
  return (
    <div className={styles.reviews}>
      <NavTourist />
      <div className={styles.reviewsContent}>
        <div className={styles.reviewsContent__top}>
          <h1 className={styles.reviewsContent__topTitle}>Мои отзывы</h1>
          <Search />
        </div>
        <h3 className={styles.reviewsContent__tour_name}>
          Тур “Осенние приключения”
        </h3>
        <ul className={styles.reviewsContent__list}>
          <Feedback
            name="Егорова Мария"
            avatar={avatar}
            text="Заказав авторский тур, я получила намного больше, чем ожидала! Организаторы тура проявили исключительное внимание к деталям, создавая насыщенную и уникальную программу, которая учитывала все наши интересы и предпочтения. Мы посетили места, о которых даже не слышали раньше, встретили удивительных людей и познакомились с местной культурой. Команда организаторов всегда была на связи и готова помочь в любой ситуации. "
            date="13.02.2024"
          />
          <Feedback
            name="Егорова Мария"
            avatar={avatar}
            text="Это был невероятный опыт, полный приключений и новых открытий! Организаторы тура проявили высокий профессионализм, предоставив нам уникальные маршруты, которые обычно недоступны для туристов. Они смогли показать нам места, которые даже местные жители не знали, и поделились увлекательными историями и интересными фактами о каждом месте."
            date="14.02.2024"
          />
        </ul>
      </div>
    </div>
  );
};
