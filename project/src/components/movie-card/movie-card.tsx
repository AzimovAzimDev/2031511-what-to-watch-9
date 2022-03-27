import {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {movie} from '../../routes/routes';
import MoviePreview from '../movie-preview/movie-preview';
import {Movie} from '../../types/Movie';

/**
 * Карточка фильма
 *
 * @constructor
 */
function MovieCard(props: Movie): JSX.Element {
  const card = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  let timer:  ReturnType<typeof setTimeout> | null = null;

  /**
   * Обрботчик события принаведение на карточку
   */
  const handleMouseOver = () => {
    timer = setTimeout(()=>{video?.current?.play();}, 1000);
  };

  /**
   * Обработчик события при снятии наведения с карточки
   */
  const handleMouseLeave = () => {
    video?.current?.load();

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  /**
   * Создаем слушатели для воспроизведения превью
   */
  useEffect(() => {
    card?.current?.addEventListener('mouseenter', handleMouseOver);
    card?.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card?.current?.removeEventListener('mouseover', handleMouseOver);
      card?.current?.addEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <article
      ref={card}
      className="small-film-card catalog__films-card"
    >
      <Link to={movie.buildRoute(props.id)} className="small-film-card__link">
        <div className="small-film-card__image">
          <MoviePreview
            ref={video}
            poster={props.image}
            preview={props.preview}
          />
        </div>
        <h3 className="small-film-card__title">
          { props.name }
        </h3>
      </Link>
    </article>
  );
}

export default MovieCard;
