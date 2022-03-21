import {MovieDescription} from './MovieDescriptionProps';
import {MovieReview} from './MovieReview';
import {MovieDetails} from './MovieDetails';

/**
 * Тип фильма в списках
 */
export type Movie = {
  id: number;
  name: string;
  image: string;
  preview: string;
  genre: string;
}

/**
 * Полная инфомрмация о фильме
 */
export type MovieFull = Movie & {
  overview: MovieDescription;
  reviews: MovieReview[];
  details:MovieDetails;
}
