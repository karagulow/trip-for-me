import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.aboutTitle}>Немного о ТРИПФОРМИ</h1>
      <p className={styles.aboutText}>
        Платформа для поиска и создания авторских туристических туров.
      </p>
      <h2 className={styles.aboutFunc}>Функции</h2>
      <ul className={styles.aboutFuncList}>
        <li className={styles.aboutFuncList__item}>
          <p className={styles.aboutFuncList__itemTitle}>
            Поиск и выбор оригинальных и уникальных туров по интересам
            пользователя с удобным инструментом поиска.{' '}
          </p>
          <p className={styles.aboutFuncList__itemText}>
            Учитываем интересы, предпочтения пользователя по цене, срокам,
            сложности и насыщенности.
          </p>
        </li>
        <li className={styles.aboutFuncList__item}>
          <p className={styles.aboutFuncList__itemTitle}>
            Расширенный выбор туров с разными опциями и возможностью создания
            индивидуального маршрута.{' '}
          </p>
          <p className={styles.aboutFuncList__itemText}>
            Даем возможность комбинировать туры и указывать личные положения по
            изменению маршрутов.
          </p>
        </li>
        <li className={styles.aboutFuncList__item}>
          <p className={styles.aboutFuncList__itemTitle}>
            Поддержка гидов-любителей в создании и продвижении авторских туров с
            помощью различных инструментов и ресурсов.
          </p>
          <p className={styles.aboutFuncList__itemText}>
            Эксперты гиды помогут гидам создать классный авторский курс и
            грамотно его продвигать на платформе.
          </p>
        </li>
      </ul>
      <ul className={styles.aboutNumbers}>
        <li className={styles.aboutNumbers__item}>
          <h1 className={styles.aboutNumbers__itemTitle}>1119</h1>
          <p className={styles.aboutNumbers__itemText}>Городов России</p>
        </li>
        <li className={styles.aboutNumbers__item}>
          <h1 className={styles.aboutNumbers__itemTitle}>45</h1>
          <p className={styles.aboutNumbers__itemText}>Проведенных туров</p>
        </li>
        <li className={styles.aboutNumbers__item}>
          <h1 className={styles.aboutNumbers__itemTitle}>750</h1>
          <p className={styles.aboutNumbers__itemText}>
            Человек сходили на наши экскурсии за 2024
          </p>
        </li>
      </ul>
    </div>
  );
};
