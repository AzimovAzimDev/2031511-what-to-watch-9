import {useState} from 'react';
import {Link, Navigate, useParams} from 'react-router-dom';
import SvgElement from '../../components/svg-element/svg-element';
import Header from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
import MovieCard from '../../components/movie-card/movie-card';
import Tabs from '../../components/tabs/tabs';
import MovieDescription from '../../components/movie-description/movie-description';
import MovieDetails from '../../components/movie-details/movie-details';
import MovieReviews from '../../components/movie-reviews/movie-reviews';
import {player} from '../../routes/routes';
import {TABS, tabs} from '../../constants/tabs';
import movies, {getFullMovieInfo} from '../../mocks/movies';

/**
 * Страница фильма
 */
export default function Movie () {

  const {id} = useParams();
  const movie = getFullMovieInfo(Number(id));
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  if (!movie) {
    return <Navigate to="404" />;
  }

  const poster = `img/${movie.image}`;

  return (
    <>
      <SvgElement/>

      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={poster} alt={movie.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header title=""/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movie.details.genre}</span>
                <span className="film-card__year">{movie.details.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={player.buildRoute(movie.id)}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={poster} alt={movie.name} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <Tabs
                items={tabs}
                activeId={activeTab}
                onSelect={setActiveTab}
              />
              {
                activeTab === TABS.Overview
                && <MovieDescription {...movie.overview}/>
              }
              {
                activeTab === TABS.Details
                && <MovieDetails  {...movie.details}/>
              }
              {
                activeTab === TABS.Reviews
                && <MovieReviews reviews={movie.reviews}/>
              }
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {
              movies
                .filter((m) => m.genre === movie.genre)
                .slice(0, 4).map((m) => (
                  <MovieCard
                    key={`movie${m.id}`}
                    {...m}
                  /> ))
            }
          </div>
        </section>

        <Footer/>
      </div>
    </>);
}
