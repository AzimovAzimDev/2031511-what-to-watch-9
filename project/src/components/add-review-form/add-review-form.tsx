import { FormEventHandler, useState} from 'react';

/**
 * Maximum review points
 */
const MAX_POINTS = 10;

/**
 * Компонента для получения отзыва по фильму
 */
export default function AddReviewForm() {

  const [points, setPoints] = useState(Array(MAX_POINTS).fill(true));
  const [review, setReview] = useState('');

  /**
   * Обработчик события на изменения рейтинга
   * @param index - индек звезды на который кликнули
   */
  const handleChange = (index: number) => {
    const position = (MAX_POINTS - index) ;
    const newAr = [...Array(MAX_POINTS - position).fill(false), ...Array(position).fill(true)];
    setPoints(newAr);
  };

  /**
   * Обработчик события на ввод в поле описания
   * @param event
   */
  const handleTextAreaInput: FormEventHandler<HTMLTextAreaElement> = (event) => {
    setReview((event.target as HTMLInputElement).value);
  };

  /**
   * Получения рейтинга в цифре который указал пользователь
   */
  const getPoints = (): number => MAX_POINTS - points.lastIndexOf(false) - 1;

  /**
   * Обработчик события на отправку формы
   */
  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log({
      points: getPoints(),
      review,
    });
  };

  return(
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={(e) => e.preventDefault()}>
        <div className="rating">
          <div className="rating__stars">
            {
              points.map((point, index) => {
                const inputKey = `star-${index}`;
                const labelKey = `star-label-${index}`;

                return (
                  <>
                    <input
                      key={inputKey}
                      id={`star-${index}`}
                      checked={point}
                      value={index}
                      name="rating"
                      type="checkbox"
                      className="rating__input"
                      onChange={() => handleChange(index)}
                    />
                    <label
                      key={labelKey}
                      htmlFor={`star-${index}`}
                      className="rating__label"
                    >
                      Rating {index}
                    </label>
                  </>
                );
              })
            }

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
