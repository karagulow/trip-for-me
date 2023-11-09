import React from 'react';
import { IMaskInput } from 'react-imask';

import styles from './AddCard.module.scss';

const cardNumberMask = '0000 0000 0000 0000';
const cardPeriodMask = '00/00';
const cardCvcMask = '000';

export const AddCard = ({ setAddCardOpen }) => {
  const [cardFormOpen, setCardFormOpen] = React.useState(true);
  const [cardConfirmOpen, setCardConfirmOpen] = React.useState(false);

  return (
    <div className={styles.add_card}>
      {cardFormOpen && (
        <div className={styles.add_cardBlock}>
          <div
            className={styles.add_cardBlock__close}
            onClick={() => {
              setAddCardOpen(false);
              document.body.style.overflow = 'auto';
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.87663 0.638163L13 9.76153L22.0761 0.685434C22.2766 0.472045 22.5181 0.301342 22.7861 0.18356C23.0542 0.0657777 23.3433 0.0033429 23.636 0C24.2629 0 24.8641 0.249018 25.3073 0.692273C25.7506 1.13553 25.9996 1.73671 25.9996 2.36357C26.0051 2.65334 25.9514 2.94119 25.8416 3.20944C25.7319 3.47769 25.5685 3.72069 25.3615 3.92352L16.1672 12.9996L25.3615 22.1939C25.751 22.575 25.9794 23.0911 25.9996 23.6357C25.9996 24.2625 25.7506 24.8637 25.3073 25.307C24.8641 25.7502 24.2629 25.9992 23.636 25.9992C23.3348 26.0117 23.0343 25.9615 22.7535 25.8516C22.4728 25.7417 22.2179 25.5747 22.0052 25.3611L13 16.2377L3.90027 25.3374C3.70056 25.5437 3.46198 25.7084 3.19829 25.822C2.93461 25.9356 2.65104 25.9958 2.36395 25.9992C1.73709 25.9992 1.13591 25.7502 0.692657 25.307C0.249402 24.8637 0.000384568 24.2625 0.000384568 23.6357C-0.00512607 23.3459 0.0486378 23.058 0.158377 22.7898C0.268116 22.5215 0.431516 22.2785 0.638547 22.0757L9.83282 12.9996L0.638547 3.80534C0.248996 3.42424 0.0205685 2.90816 0.000384568 2.36357C0.000384568 1.73671 0.249402 1.13553 0.692657 0.692273C1.13591 0.249018 1.73709 0 2.36395 0C2.93121 0.0070907 3.47483 0.236357 3.87663 0.638163Z"
                fill="#3578FF"
              />
            </svg>
          </div>
          <form className={styles.add_cardBlock__form}>
            <IMaskInput
              className={styles.add_cardBlock__formNumber}
              mask={cardNumberMask}
              type="text"
              placeholder="Номер карты"
              required
            />
            <div className={styles.add_cardBlock__formCode}>
              <IMaskInput
                className={styles.add_cardBlock__formCode__period}
                mask={cardPeriodMask}
                type="text"
                placeholder="Срок действия"
                required
              />
              <IMaskInput
                className={styles.add_cardBlock__formCode__cvc}
                mask={cardCvcMask}
                type="password"
                placeholder="CVV\CVC"
                required
              />
            </div>
            <button
              type="submit"
              className={styles.add_cardBlock__formBtn}
              onClick={() => {
                setCardFormOpen(false);
                setCardConfirmOpen(true);
              }}
            >
              Привязать карту
            </button>
          </form>
        </div>
      )}

      {cardConfirmOpen && (
        <div className={styles.add_cardConfirm}>
          <div
            className={styles.add_cardConfirm__close}
            onClick={() => {
              setAddCardOpen(false);
              document.body.style.overflow = 'auto';
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.87663 0.638163L13 9.76153L22.0761 0.685434C22.2766 0.472045 22.5181 0.301342 22.7861 0.18356C23.0542 0.0657777 23.3433 0.0033429 23.636 0C24.2629 0 24.8641 0.249018 25.3073 0.692273C25.7506 1.13553 25.9996 1.73671 25.9996 2.36357C26.0051 2.65334 25.9514 2.94119 25.8416 3.20944C25.7319 3.47769 25.5685 3.72069 25.3615 3.92352L16.1672 12.9996L25.3615 22.1939C25.751 22.575 25.9794 23.0911 25.9996 23.6357C25.9996 24.2625 25.7506 24.8637 25.3073 25.307C24.8641 25.7502 24.2629 25.9992 23.636 25.9992C23.3348 26.0117 23.0343 25.9615 22.7535 25.8516C22.4728 25.7417 22.2179 25.5747 22.0052 25.3611L13 16.2377L3.90027 25.3374C3.70056 25.5437 3.46198 25.7084 3.19829 25.822C2.93461 25.9356 2.65104 25.9958 2.36395 25.9992C1.73709 25.9992 1.13591 25.7502 0.692657 25.307C0.249402 24.8637 0.000384568 24.2625 0.000384568 23.6357C-0.00512607 23.3459 0.0486378 23.058 0.158377 22.7898C0.268116 22.5215 0.431516 22.2785 0.638547 22.0757L9.83282 12.9996L0.638547 3.80534C0.248996 3.42424 0.0205685 2.90816 0.000384568 2.36357C0.000384568 1.73671 0.249402 1.13553 0.692657 0.692273C1.13591 0.249018 1.73709 0 2.36395 0C2.93121 0.0070907 3.47483 0.236357 3.87663 0.638163Z"
                fill="#3578FF"
              />
            </svg>
          </div>
          <h1 className={styles.add_cardConfirm__title}>Банк</h1>
          <ul className={styles.add_cardConfirm__list}>
            <li className={styles.add_cardConfirm__listItem}>Сумма</li>
            <li className={styles.add_cardConfirm__listItem}>Торговая точка</li>
            <li className={styles.add_cardConfirm__listItem}>Дата</li>
            <li className={styles.add_cardConfirm__listItem}>Номер карты</li>
          </ul>
          <form className={styles.add_cardConfirm__form}>
            <p className={styles.add_cardConfirm__formCheck}>
              Пожалуйста, проверьте детали покупки и введите код, отправленный
              на номер +78989*****32
            </p>
            <input
              className={styles.add_cardConfirm__formCode}
              type="text"
              placeholder="Введите код..."
            />
            <p className={styles.add_cardConfirm__formPeriod}>
              Срок действия истекает через <span>1:00</span>
            </p>
            <button className={styles.add_cardConfirm__formBtn} type="button">
              Отправить или попробовать снова
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
