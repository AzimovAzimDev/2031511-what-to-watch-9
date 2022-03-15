import { FormEventHandler, useState} from 'react';
import {RatingStar} from '../rating-star/rating-star';

/**
 * Компонента для получения отзыва по фильму
 */
export default function AddReviewForm() {

  const [point, setPoint] = useState(0);
  const [review, setReview] = useState('');

  /**
   * Обработчик события на ввод в поле описания
   * @param event
   */
  const handleTextAreaInput: FormEventHandler<HTMLTextAreaElement> = (event) => {
    setReview((event.target as HTMLInputElement).value);
  };

  /**
   * Обработчик события на отправку формы
   */
  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log({
      point,
      review,
    });
  };

  return(
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={(e) => e.preventDefault()}>
        <div className="rating">
          <div className="rating__stars">
            <div className="rating__stars">

              {
                [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
                  .map((p) =>
                    (
                      <RatingStar
                        key={p}
                        id={p}
                        onChange={(e) => setPoint(p)}
                      />
                    ),
                  )

              }

            </div>
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            value={review}
            id="review-text"
            name="review-text"
            placeholder="Review text"
            className="add-review__textarea"
            onInput={handleTextAreaInput}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              type="submit"
              className="add-review__btn"
              onClick={handleSubmit}
            >
              Post
            </button>
          </div>

        </div>
      </form>
    </div>);
}
