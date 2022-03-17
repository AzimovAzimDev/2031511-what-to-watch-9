import SvgElement from '../../components/svg-element/svg-element';
import {Navigate, useParams} from 'react-router-dom';
import movies from '../../mocks/movies';
import AddReviewForm from '../../components/add-review-form/add-review-form';

export default function AddReview () {
  const {id} = useParams();
  const movie = movies.find((element) => element.id === Number(id));

  if (!movie) {
    return <Navigate to="404" />;
  }

  const thumbnail = `img/${movie.image}`;

  return (
    <>
      <SvgElement/>

      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={thumbnail} alt={movie.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="film-page.html" className="breadcrumbs__link">{movie.name}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img
              src={thumbnail}
              alt={movie.name}
              height="327"
            />
          </div>
        </div>

        <AddReviewForm/>
      </section>
    </>);
}
