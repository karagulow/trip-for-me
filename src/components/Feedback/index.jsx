import styles from './Feedback.module.scss';

export const Feedback = ({ name, avatar, text, date }) => {
  return (
    <>
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

      <li className={styles.mobFeedbackItem}>
        <div className={styles.mobFeedbackItem__user}>
          <img src={avatar} alt="avatar" />
          <h3>{name}</h3>
        </div>
        <p className={styles.mobFeedbackItem__text}>{text}</p>
        <p className={styles.mobFeedbackItem__date}>{date}</p>
      </li>
    </>
  );
};
