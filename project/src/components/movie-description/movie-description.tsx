import {MovieDescription as MovieDescriptionProps} from '../../types/MovieDescriptionProps';

export default function MovieDescription(props: MovieDescriptionProps) {
  const getHumanReadibleReview = (rating: number) => {
    const ratingMap = new Map<number, string>( [
      [0, 'no reviews'],
      [1, 'The worst'],
      [2, 'Very Bad'],
      [3, 'Very Bad'],
      [4, 'Bad'],
      [6, 'Good'],
      [5, 'Not Bad'],
      [7, 'Good'],
      [8, 'Very good'],
      [9, 'Very good'],
      [10, 'The best'],
    ]);

    return ratingMap.get(Math.round(Number(rating)));

  };
  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{props.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getHumanReadibleReview(props.rating)}</span>
          <span className="film-rating__count">{props.ratingReviews} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{props.description}</p>
        <p className="film-card__director"><strong>Director: {props.director}</strong></p>
        <p className="film-card__starring">
          <strong>{props.starring}</strong>
        </p>
      </div>
    </>
  );
}
