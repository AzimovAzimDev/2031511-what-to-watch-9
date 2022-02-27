import MovieCard from '../components/movie-card/movie-card';

/**
 * Пропсы для страницы фильма
 */
export type MoviePageProps = {
  name: string;
  genre: string;
  premiereDate: string;
  image: string;
  list: MovieCard[];
}
