import {Movie} from '../../types/Movie';
import {Link} from 'react-router-dom';
import {movie} from '../../routes/routes';

/**
 * Карточка фильма
 *
 * @constructor
 */
function MovieCard(props: Movie): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <Link to={movie.buildRoute(props.id)}>
        <div className="small-film-card__image">
          <img src={`img/${props.image}`} alt={props.name} width="280" height="175"/>
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">{ props.name }</a>
        </h3>
      </Link>
    </article>
  );
}

export default MovieCard;
