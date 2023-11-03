import styles from './Feedback.module.scss';

export const Feedback = ({ name, avatar, text, date }) => {
  return (
    <li className={styles.feedbackItem}>
      <img src={avatar} alt="avatar" />
      <div className={styles.feedbackItem__content}>
        <div className={styles.feedbackItem__contentTop}>
          <h3>{name}</h3>
          <p>{date}</p>
        </div>
        <p className={styles.feedbackItem__contentText}>{text}</p>
      </div>
    </li>
  );
};
