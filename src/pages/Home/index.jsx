import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';
import { StoriesItem } from '../../components/StoriesItem';
import { TourItem } from '../../components/TourItem';
import { SelectionItem } from '../../components/SelectionItem';

export const Home = () => {
  const [city, setCity] = React.useState('');
  const [date, setDate] = React.useState('');
  const [tourists, setTourists] = React.useState({ adults: 0, children: 0 });
  const [isTouristSelectorOpen, setIsTouristSelectorOpen] =
    React.useState(false);
  const [tempTourists, setTempTourists] = React.useState({
    adults: 0,
    children: 0,
  });

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  const handleDateChange = e => {
    setDate(e.target.value);
  };

  const openTouristSelector = () => {
    setIsTouristSelectorOpen(true);
    setTempTourists({ ...tourists });
  };

  const closeTouristSelector = () => {
    setIsTouristSelectorOpen(false);
  };

  const updateTempTourists = (key, value) => {
    setTempTourists(prevTempTourists => ({
      ...prevTempTourists,
      [key]: value,
    }));
  };

  const applyTempTourists = () => {
    setTourists({ ...tempTourists });
    closeTouristSelector();
  };

  const touristSelectorRef = React.useRef();

  React.useEffect(() => {
    const handleClickTouristSelectorOutside = event => {
      if (!event.composedPath().includes(touristSelectorRef.current)) {
        setIsTouristSelectorOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickTouristSelectorOutside);

    return () => {
      document.body.removeEventListener(
        'click',
        handleClickTouristSelectorOutside
      );
    };
  }, []);

  return (
    <>
      <div className={styles.tour_search}>
        <h1 className={styles.tour_searchTitle}>
          ДУМАЕШЬ, КУДА ОТПРАВИТЬСЯ НА ЭТОТ РАЗ?
        </h1>
        <p className={styles.tour_searchText}>
          ТРИПФОРМИ подберет авторский тур и сделает твое путешествие
          незабываемым!
        </p>
        <form className={styles.tour_searchForm}>
          <input
            className={styles.tour_searchFormCity}
            type="text"
            placeholder="Город"
            id="city"
            list="cities"
            value={city}
            onChange={handleCityChange}
            required
          />

          <input
            className={styles.tour_searchFormDate}
            type="text"
            id="date"
            placeholder="Дата"
            value={date}
            onChange={handleDateChange}
            required
          />

          <div ref={touristSelectorRef}>
            <input
              className={styles.tour_searchFormTourists}
              type="text"
              id="tourists"
              placeholder="Туристы"
              value={
                tourists.adults || tourists.children
                  ? `${tourists.adults} ${
                      tourists.adults >= 2
                        ? 'взрослых'
                        : tourists.adults === 1
                        ? 'взрослый'
                        : 'взрослых'
                    }, ${tourists.children} ${
                      tourists.children >= 2
                        ? 'детей'
                        : tourists.children === 1
                        ? 'ребенок'
                        : 'детей'
                    }`
                  : ''
              }
              readOnly
              required
              onClick={openTouristSelector}
            />
            {isTouristSelectorOpen && (
              <div className={styles.tour_searchFormTourists__selector}>
                {tempTourists.adults > 0 ? (
                  <div
                    className={styles.tour_searchFormTourists__selector__item}
                  >
                    <button
                      onClick={() =>
                        updateTempTourists('adults', tempTourists.adults - 1)
                      }
                    >
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 34C7.6 34 0 26.4 0 17C0 7.6 7.6 0 17 0C26.4 0 34 7.6 34 17C34 26.4 26.4 34 17 34ZM17 2C8.7 2 2 8.7 2 17C2 25.3 8.7 32 17 32C25.3 32 32 25.3 32 17C32 8.7 25.3 2 17 2Z"
                          fill="#3578FF"
                        />
                        <path d="M8 16H26V18H8V16Z" fill="#3578FF" />
                      </svg>
                    </button>
                    <div
                      className={
                        styles.tour_searchFormTourists__selector__itemValue
                      }
                      onChange={e =>
                        updateTempTourists('adults', parseInt(e.target.value))
                      }
                    >
                      {tempTourists.adults}{' '}
                      {tempTourists.adults > 1 ? 'взрослых' : 'взрослый'}
                    </div>
                    <button
                      onClick={() =>
                        updateTempTourists('adults', tempTourists.adults + 1)
                      }
                    >
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 34C7.6 34 0 26.4 0 17C0 7.6 7.6 0 17 0C26.4 0 34 7.6 34 17C34 26.4 26.4 34 17 34ZM17 2C8.7 2 2 8.7 2 17C2 25.3 8.7 32 17 32C25.3 32 32 25.3 32 17C32 8.7 25.3 2 17 2Z"
                          fill="#3578FF"
                        />
                        <path d="M8 16H26V18H8V16Z" fill="#3578FF" />
                        <path d="M16 8H18V26H16V8Z" fill="#3578FF" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <button
                    className={styles.tour_searchFormTourists__selectorAdd}
                    onClick={() =>
                      updateTempTourists('adults', tempTourists.adults + 1)
                    }
                  >
                    Добавить взрослого
                  </button>
                )}
                {tempTourists.children > 0 ? (
                  <div
                    className={styles.tour_searchFormTourists__selector__item}
                  >
                    <button
                      onClick={() =>
                        updateTempTourists(
                          'children',
                          tempTourists.children - 1
                        )
                      }
                    >
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 34C7.6 34 0 26.4 0 17C0 7.6 7.6 0 17 0C26.4 0 34 7.6 34 17C34 26.4 26.4 34 17 34ZM17 2C8.7 2 2 8.7 2 17C2 25.3 8.7 32 17 32C25.3 32 32 25.3 32 17C32 8.7 25.3 2 17 2Z"
                          fill="#3578FF"
                        />
                        <path d="M8 16H26V18H8V16Z" fill="#3578FF" />
                      </svg>
                    </button>
                    <div
                      className={
                        styles.tour_searchFormTourists__selector__itemValue
                      }
                      onChange={e =>
                        updateTempTourists('children', parseInt(e.target.value))
                      }
                    >
                      {tempTourists.children}{' '}
                      {tempTourists.children > 1 ? 'детей' : 'ребенок'}
                    </div>
                    <button
                      onClick={() =>
                        updateTempTourists(
                          'children',
                          tempTourists.children + 1
                        )
                      }
                    >
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 34C7.6 34 0 26.4 0 17C0 7.6 7.6 0 17 0C26.4 0 34 7.6 34 17C34 26.4 26.4 34 17 34ZM17 2C8.7 2 2 8.7 2 17C2 25.3 8.7 32 17 32C25.3 32 32 25.3 32 17C32 8.7 25.3 2 17 2Z"
                          fill="#3578FF"
                        />
                        <path d="M8 16H26V18H8V16Z" fill="#3578FF" />
                        <path d="M16 8H18V26H16V8Z" fill="#3578FF" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <button
                    className={styles.tour_searchFormTourists__selectorAdd}
                    onClick={() =>
                      updateTempTourists('children', tempTourists.children + 1)
                    }
                  >
                    Добавить ребенка
                  </button>
                )}

                <button
                  className={styles.tour_searchFormTourists__selectorBtn}
                  onClick={applyTempTourists}
                >
                  Выбрать
                </button>
              </div>
            )}
          </div>

          <button className={styles.tour_searchFormBtn} type="button">
            Поиск
          </button>
        </form>
      </div>
      <div className={styles.stories}>
        <h1 className={styles.storiesTitle}>
          Готовы к приключениям этой осенью?
        </h1>
        <ul className={styles.storiesList}>
          <StoriesItem title={'Насладись природными красотами Краснодара'} />
          <StoriesItem title={'Почувствуй осенний вайб с Ялтой'} />
          <StoriesItem title={'Продли лето в Сочи'} />
          <StoriesItem title={'Попробуй на вкус Ростов-на-Дону'} />
        </ul>
      </div>
      <div className={styles.selection}>
        <h1 className={styles.selectionTitle}>
          Необычные подборки для самых смелых
        </h1>
        <ul className={styles.selectionList}>
          <SelectionItem
            title="Летний вайб"
            text="Почувствуйте эту летнюю атмосферу в компании приятных людей"
          />
          <SelectionItem
            title="Горячие источники"
            text="Почувствуйте эту летнюю атмосферу в компании приятных людей"
          />
          <SelectionItem
            title="Снежная пора"
            text="Почувствуйте эту летнюю атмосферу в компании приятных людей"
          />
        </ul>
        <button className={styles.selectionBtn}>
          <Link to="collections" onClick={() => window.scrollTo(0, 0)}>
            Показать еще
          </Link>
        </button>
      </div>
      <div className={styles.tour}>
        <h1 className={styles.tourTitle}>Популярные туры</h1>
        <ul className={styles.tourList}>
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
        </ul>
      </div>
    </>
  );
};
