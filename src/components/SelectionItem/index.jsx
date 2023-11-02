import styles from './SelectionItem.module.scss';

export const SelectionItem = ({ title, text }) => {
  return (
    <li className={styles.selectionItem}>
      <h3 className={styles.selectionItem__title}>{title}</h3>
      <p className={styles.selectionItem__text}>{text}</p>
    </li>
  );
};
