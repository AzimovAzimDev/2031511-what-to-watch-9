import MovieCard from '../movie-card/movie-card';
import {MovieListProps} from '../../types/MovieList';

/**
 * Component for render list of movies
 */
export function MovieList({ list }: MovieListProps) {
  return(
    <div className="catalog__films-list">
      {
        list.map((movie) => (
          <MovieCard
            key={`movie${movie.id}`}
            {...movie}
          /> ))
      }
    </div>
  );
}
