import SvgElement from 'components/svg-element/svg-element';
import {Footer} from 'components/footer/footer';
import Header from 'components/header/header';
import {MovieList} from 'components/movie-list/movie-list';
import Tabs from 'components/tabs/tabs';
import TabItem from 'components/tabs/tab-item';
import {MoviePageProps} from 'types/MoviePage';
import genre from 'mocks/genre';

import {useAppDispatch, useAppSelector} from 'hooks/index';
import {setGenre} from 'store/action';


/**
 * Главная страница
 */
function Home(props: MoviePageProps): JSX.Element {
  const activeGenre = useAppSelector((state) => state.genre);
  const movies = useAppSelector((state) => {
    if (activeGenre === 'all_genres') {
      return state.movies;
    }

    return  state.movies.filter((movie) => movie.genre === activeGenre);
  });
  const dispatch = useAppDispatch();

  const handleSelectGenre = (key: string) => {
    dispatch(setGenre(key));
  };

  return (
    <>
      <SvgElement/>

      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header title=""/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={`img/${props.image}`}
                alt={props.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title"> { props.name } </h2>
              <p className="film-card__meta">
                <span className="film-card__genre"> { props.genre } </span>
                <span className="film-card__year"> { props.premiereDate } </span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Tabs className="catalog__genres-list">
            {genre.map((item, index) => {
              const key = `tab-${index}`;
              return (
                <TabItem
                  key={key}
                  {...item}
                  className={`catalog__genres-item catalog__genres-link ${activeGenre === item.id && 'catalog__genres-item--active'}`}
                  onSelect={handleSelectGenre}
                />
              );
            })}
          </Tabs>

          <MovieList list={movies}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </>);
}

export default Home;
