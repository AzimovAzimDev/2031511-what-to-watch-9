import {MovieReview} from '../../types/MovieReview';

export default function MovieReviews({reviews}: {reviews: MovieReview[] }) {
  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="review"
          >
            <blockquote className="review__quote">
              <p className="review__text">{review.text}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user}</cite>
                <time className="review__date" dateTime="2016-12-24">{review.date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.points}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
