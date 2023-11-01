import styles from './StoriesItem.module.scss';
import storiesImg from '../../assets/img/main/tour-img.png';

export const StoriesItem = ({ title }) => {
  return (
    <li className={styles.storiesList__item}>
      <img src={storiesImg} alt="stories image" />
      <p>{title}</p>
    </li>
  );
};
