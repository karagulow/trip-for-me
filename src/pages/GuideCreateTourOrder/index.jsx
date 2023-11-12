import React from 'react';
import styles from './GuideCreateTourOrder.module.scss';
import classNames from 'classnames';
import { GuideCreateTourOrderCheck } from '../../components/GuideCreateTourOrderCheck';
import { GuideCreateTourOrderSuccess } from '../../components/GuideCreateTourOrderSuccess';

export const GuideCreateTourOrder = () => {
  const [expertHelp, setExpertHelp] = React.useState(false);
  const [orderCheckOpen, setOrderCheckOpen] = React.useState(false);
  const [orderSuccessOpen, setOrderSuccessOpen] = React.useState(false);

  orderCheckOpen || orderSuccessOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');

  return (
    <div className={styles.order}>
      <h1 className={styles.orderTitle}>Оформление заказа</h1>
      <div className={styles.orderBlock}>
        <div className={styles.orderBlock__left}>
          <div className={styles.orderBlock__left__about}>
            <h3 className={styles.orderBlock__left__aboutTitle}>Заказ №</h3>
            <div className={styles.orderBlock__left__aboutDate}>
              <p>14.02.2024</p>
              <p>12:01</p>
            </div>
            <h3 className={styles.orderBlock__left__aboutName}>
              Тур “Весенний вайб”
            </h3>
            <div className={styles.orderBlock__left__aboutParams}>
              <p className={styles.orderBlock__left__aboutParams__type}>
                Наименование услуги:
              </p>
            </div>
            <div className={styles.orderBlock__left__aboutParams}>
              <p className={styles.orderBlock__left__aboutParams__type}>
                Публикация туристического маршрута
              </p>
              <p className={styles.orderBlock__left__aboutParams__count}>х1</p>
            </div>
          </div>
          <div className={styles.orderBlock__left__pay_method}>
            <h2 className={styles.orderBlock__left__pay_methodTitle}>
              Способ оплаты
            </h2>
            <div className={styles.orderBlock__left__pay_methodItem}>
              <div
                className={styles.orderBlock__left__pay_methodItem__circle}
              ></div>
              <p>Банковаская карта</p>
            </div>
          </div>
        </div>
        <div className={styles.orderBlock__right}>
          <div className={styles.orderBlock__right__payment}>
            <h3 className={styles.orderBlock__right__paymentPrice}>
              Общая стоимость: <span>5000 ₽</span>
            </h3>
            <div
              className={styles.orderBlock__right__paymentExpert_help}
              onClick={() => setExpertHelp(!expertHelp)}
            >
              <div
                className={classNames(
                  styles.orderBlock__right__paymentExpert_help__circle,
                  expertHelp && styles.circleActive
                )}
              ></div>
              <div
                className={styles.orderBlock__right__paymentExpert_help__text}
              >
                Помощь эксперта* <br />
                <span>*стоимость консультации 5000 рублей</span>
              </div>
            </div>
            <button onClick={() => setOrderCheckOpen(true)}>Оплатить</button>
          </div>
          <div className={styles.orderBlock__right__mail}>
            <form className={styles.orderBlock__right__mailForm}>
              <input type="text" placeholder="Введите Email" required />
              <button>Отправить чек на почту</button>
            </form>
          </div>
        </div>
      </div>
      {orderCheckOpen && (
        <GuideCreateTourOrderCheck
          setOrderCheckOpen={setOrderCheckOpen}
          setOrderSuccessOpen={setOrderSuccessOpen}
        />
      )}

      {orderSuccessOpen && (
        <GuideCreateTourOrderSuccess
          setOrderSuccessOpen={setOrderSuccessOpen}
        />
      )}
    </div>
  );
};
