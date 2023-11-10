import style from './GuideAnalytics.module.scss';
import { NavGuide } from '../../components/NavGuide';

export const GuideAnalytics = () => {
  return (
    <div className={style.analytics}>
      <NavGuide />
      <div className={style.analyticsBlock}>
        <div className={style.analyticsBlock__row}>
          <div className={style.analyticsBlock__rowItem}>
            <h3 className={style.analyticsBlock__rowItem__title}>
              Количество купленных туров
            </h3>
            <p className={style.analyticsBlock__rowItem__text}>
              “график по месяцам за год”
            </p>
          </div>
          <div className={style.analyticsBlock__rowItem}>
            <h3 className={style.analyticsBlock__rowItem__title}>
              Количество просмотров
            </h3>
            <input
              type="text"
              className={style.analyticsBlock__rowItem__search}
              placeholder="Поиск..."
            />
            <p className={style.analyticsBlock__rowItem__text}>
              “график по месяцам”
            </p>
          </div>
        </div>
        <div className={style.analyticsBlock__row}>
          <div className={style.analyticsBlock__rowItem}>
            <h3 className={style.analyticsBlock__rowItem__title}>
              Общая выручка по туру
            </h3>
            <input
              type="text"
              className={style.analyticsBlock__rowItem__search}
              placeholder="Поиск..."
            />
            <p className={style.analyticsBlock__rowItem__text}>
              <span>0</span> рублей за все время
            </p>
            <p className={style.analyticsBlock__rowItem__text}>
              “график по месяцам”
            </p>
          </div>
          <div className={style.analyticsBlock__rowItem}>
            <h3 className={style.analyticsBlock__rowItem__title}>
              Количество просмотров
            </h3>
            <input
              type="text"
              className={style.analyticsBlock__rowItem__search}
              placeholder="Поиск..."
            />
            <p className={style.analyticsBlock__rowItem__accent}>День</p>
            <p className={style.analyticsBlock__rowItem__text}>
              “график по часам”
            </p>
            <p className={style.analyticsBlock__rowItem__accent}>Месяц</p>
            <p className={style.analyticsBlock__rowItem__text}>
              “график по дням”
            </p>
            <p className={style.analyticsBlock__rowItem__accent}>Год</p>
            <p className={style.analyticsBlock__rowItem__text}>
              “график по месяцам”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
