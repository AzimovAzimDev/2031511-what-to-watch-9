import {Movie} from '../../types/Movie';
import {Link} from 'react-router-dom';
import {movie} from '../../routes/routes';
import MoviePreview from '../movie-preview/movie-preview';

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
          <MoviePreview
            poster={props.image}
            preview={props.preview}
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">{ props.name }</a>
        </h3>
      </Link>
    </article>
  );
}

export default MovieCard;
