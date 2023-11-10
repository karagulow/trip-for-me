import classNames from 'classnames';

import styles from './GuideCreateTour.module.scss';

export const GuideCreateTour = () => {
  return (
    <div className={styles.create_tour}>
      <h1 className={styles.create_tourTitle}>
        Создание туристического маршрута
      </h1>
      <div className={styles.template}>
        <h3 className={styles.templateTitle}>Основная информация</h3>
        <input
          type="text"
          className={styles.templateInput}
          placeholder="Название тура"
        />
        <label for="tourType" className={styles.templateLabel}>
          <input
            type="text"
            id="tourType"
            className={styles.templateInput}
            placeholder="Тип тура"
            style={{ cursor: 'pointer' }}
          />
          <svg
            width="27"
            height="15"
            viewBox="0 0 27 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L12.0605 12.0605C12.8028 12.8028 14.0063 12.8028 14.7486 12.0605L24.8091 2"
              stroke="white"
              stroke-width="3.80152"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </label>
        <input
          type="text"
          className={styles.templateInput}
          placeholder="Регион тура"
        />
        <input
          type="text"
          className={styles.templateInput}
          placeholder="Город тура"
        />
      </div>

      <div className={styles.template}>
        <h3 className={styles.templateTitle}>Начало путешествия</h3>
        <input
          type="text"
          className={styles.templateInput}
          placeholder="Начало тура (город)"
        />
        <div className={styles.templateRow_inputs}>
          <input
            type="text"
            className={styles.templateInput}
            placeholder="Место сбора: например, отель"
          />
          <input
            type="text"
            className={styles.templateInput}
            placeholder="Место сбора: например, отель"
          />
        </div>
        <h3 className={styles.templateTitle}>Конец путешествия</h3>
        <div className={styles.templateRow_inputs}>
          <input
            type="text"
            className={styles.templateInput}
            placeholder="Конец тура (город)"
          />
          <input
            type="text"
            className={styles.templateInput}
            placeholder="Время окончания"
          />
        </div>
      </div>

      <div className={styles.template}>
        <h3 className={styles.templateTitle}>Фото</h3>
        <p className={styles.templateText}>
          Сделайте ваш тур привлекательнее: загрузите атмосферные фотографии в
          высоком качестве. Поддерживаемые форматы: JPG, JPEG, PNG, WEBP.
          Рекомендуемое минимальное разрешение 960x720 px. Размер файла до 10MB
        </p>
        <form className={styles.templateUpload_photo}>
          <svg
            width="59"
            height="52"
            viewBox="0 0 59 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.9167 6.50001H43.9888L40.625 1.44625C40.3277 1.00067 39.9249 0.635467 39.4524 0.383147C38.9799 0.130827 38.4523 -0.000790411 37.9167 3.57105e-06H20.5833C20.0477 -0.000790411 19.5201 0.130827 19.0476 0.383147C18.5751 0.635467 18.1723 1.00067 17.875 1.44625L14.5085 6.50001H7.58333C5.57211 6.50001 3.64326 7.29896 2.22111 8.72111C0.798956 10.1433 0 12.0721 0 14.0833V44.4167C0 46.4279 0.798956 48.3568 2.22111 49.7789C3.64326 51.2011 5.57211 52 7.58333 52H50.9167C51.9125 52 52.8986 51.8039 53.8187 51.4228C54.7387 51.0417 55.5747 50.4831 56.2789 49.7789C56.9831 49.0747 57.5417 48.2388 57.9228 47.3187C58.3039 46.3986 58.5 45.4125 58.5 44.4167V14.0833C58.5 13.0875 58.3039 12.1014 57.9228 11.1813C57.5417 10.2613 56.9831 9.42529 56.2789 8.72111C55.5747 8.01693 54.7387 7.45835 53.8187 7.07725C52.8986 6.69615 51.9125 6.50001 50.9167 6.50001ZM52 44.4167C52 44.704 51.8859 44.9795 51.6827 45.1827C51.4795 45.3859 51.204 45.5 50.9167 45.5H7.58333C7.29602 45.5 7.02047 45.3859 6.8173 45.1827C6.61414 44.9795 6.5 44.704 6.5 44.4167V14.0833C6.5 13.796 6.61414 13.5205 6.8173 13.3173C7.02047 13.1141 7.29602 13 7.58333 13H16.25C16.7857 13.0008 17.3132 12.8692 17.7857 12.6169C18.2582 12.3645 18.661 11.9993 18.9583 11.5538L22.3221 6.50001H36.1752L39.5417 11.5538C39.839 11.9993 40.2418 12.3645 40.7143 12.6169C41.1868 12.8692 41.7143 13.0008 42.25 13H50.9167C51.204 13 51.4795 13.1141 51.6827 13.3173C51.8859 13.5205 52 13.796 52 14.0833V44.4167ZM29.25 15.1667C26.6788 15.1667 24.1654 15.9291 22.0276 17.3576C19.8897 18.786 18.2235 20.8164 17.2396 23.1918C16.2556 25.5672 15.9982 28.1811 16.4998 30.7029C17.0014 33.2246 18.2395 35.541 20.0576 37.3591C21.8757 39.1772 24.1921 40.4153 26.7138 40.9169C29.2356 41.4185 31.8494 41.1611 34.2249 40.1771C36.6003 39.1932 38.6306 37.5269 40.0591 35.3891C41.4876 33.2513 42.25 30.7378 42.25 28.1667C42.2464 24.72 40.8756 21.4154 38.4384 18.9782C36.0012 16.541 32.6967 15.1703 29.25 15.1667ZM29.25 34.6667C27.9644 34.6667 26.7077 34.2855 25.6388 33.5712C24.5699 32.857 23.7368 31.8418 23.2448 30.6541C22.7528 29.4664 22.6241 28.1595 22.8749 26.8986C23.1257 25.6377 23.7448 24.4795 24.6538 23.5705C25.5629 22.6614 26.721 22.0424 27.9819 21.7916C29.2428 21.5408 30.5497 21.6695 31.7374 22.1615C32.9252 22.6534 33.9403 23.4866 34.6546 24.5555C35.3688 25.6244 35.75 26.8811 35.75 28.1667C35.75 29.8906 35.0652 31.5439 33.8462 32.7629C32.6272 33.9819 30.9739 34.6667 29.25 34.6667Z"
              fill="#3578FF"
            />
          </svg>
        </form>
      </div>

      <div className={styles.template}>
        <h3 className={styles.templateTitle}>Описание тура</h3>
        <input
          type="text"
          className={styles.templateInput}
          placeholder="Допустимый возраст"
        />
        <input
          type="text"
          className={styles.templateInput}
          placeholder="Кол-во участников"
        />
        <input
          type="text"
          className={styles.templateInput}
          placeholder="Язык"
        />
        <h3 className={styles.templateTitle}>Общее описание тура</h3>
        <p className={styles.templateText}>
          Расскажите о местах, которые вы предлагаете посетить во время
          путешествия. Опишите, какой досуг ожидает путешественника, кому будет
          интересен этот формат тура. Также укажите, какую атмосферу вы хотите
          создать во время путешествия и какие ценности и воспоминания участник
          заберет с собой. Опишите, что входит в стоимость, а что оплачивается
          отдельно.
        </p>
        <textarea
          className={styles.templateMuch_text}
          placeholder="Введите текст"
        ></textarea>
      </div>

      <div className={styles.template}>
        <h3 className={styles.templateTitle}>Условия отмены</h3>
        <p className={styles.templateText} style={{ marginBottom: '0' }}>
          Отменить бронирование и вернуть оплату можно только за 48 часов до
          даты начала тура. Возврат средств может занять до 3-х рабочих дней.
        </p>
      </div>

      <div className={styles.template}>
        <h3 className={styles.templateTitle} style={{ marginBottom: '0' }}>
          Все изменения сохраняются автоматически
        </h3>
      </div>

      <ul className={styles.create_tourList}>
        <li className={styles.create_tourList__item}>
          После прохождения проверки тур будет автоматически опубликован.
          Среднее время проверки тура составляет ~1 день.
        </li>
        <li className={styles.create_tourList__item}>
          Изменения в карточке тура можно производить в течение 24 часов с
          момента публикации, после для изменений необходимо написать в
          поддержку.
        </li>
        <li className={styles.create_tourList__item}>
          Один тур размещается на платформе на срок 1 год с момента публикации,
          при необходимости продления срока размещения потребуется повторная
          оплата.
        </li>
        <li className={styles.create_tourList__item}>
          При обращении к эксперту публикация тура осуществляется только после
          согласия организатора с рекомендацией данного эксперта. Все
          рекомендации отправляются на электронную почту, указанную
          зарегистрировавшимся организатором. Время ответа эксперта составляет
          до 3-х дней.
        </li>
      </ul>

      <button type="button" className={styles.create_tourBtn}>
        Оплатить и отправить на проверку
      </button>
    </div>
  );
};
