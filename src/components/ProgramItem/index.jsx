import styles from './ProgramItem.module.scss';

export const ProgramItem = ({ day, name, text, programImage }) => {
  return (
    <li className={styles.programItem}>
      <div className={styles.programItem__about}>
        <h3 className={styles.programItem__aboutDay}>{day} день</h3>
        <h3 className={styles.programItem__aboutName}>{name}</h3>
      </div>
      <div className={styles.programItem__images}>
        <img src={programImage} alt="program image" />
        <img src={programImage} alt="program image" />
        <img src={programImage} alt="program image" />
      </div>
      <p className={styles.programItem__text}>{text}</p>
    </li>
  );
};
