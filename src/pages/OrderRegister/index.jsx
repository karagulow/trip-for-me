import styles from './OrderRegister.module.scss';

export const OrderRegister = () => {
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
            <div className={styles.orderBlock__left__aboutTourist}>
              <p className={styles.orderBlock__left__aboutTourist__type}>
                Взрослый
              </p>
              <p className={styles.orderBlock__left__aboutTourist__count}>х2</p>
            </div>
            <div className={styles.orderBlock__left__aboutTourist}>
              <p className={styles.orderBlock__left__aboutTourist__type}>
                Детский
              </p>
              <p className={styles.orderBlock__left__aboutTourist__count}>х1</p>
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
            <h3>Общая стоимость:</h3>
            <p>4200 ₽</p>
            <button>Оплатить</button>
          </div>
          <div className={styles.orderBlock__right__mail}>
            <form className={styles.orderBlock__right__mailForm}>
              <input type="text" placeholder="Введите Email" />
              <button>Отправить чек на почту</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
