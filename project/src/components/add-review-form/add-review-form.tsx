import {useState} from 'react';

/**
 * Maximum review points
 */
const MAX_POINTS = 10;

export default function AddReviewForm() {

  const [points, setPoints] = useState(Array(MAX_POINTS).fill(false));
  const handleChange = (index: number) => {
    const position = (MAX_POINTS - index) ;
    const newAr = [...Array(MAX_POINTS - position).fill(false), ...Array(position).fill(true)];
    setPoints(newAr);
  };

  return(
    <div className="add-review">
      <form action="#" className="add-review__form">
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
                      onClick={() => handleChange(index)}
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
          <textarea className="add-review__textarea" name="review-text" id="review-text"
            placeholder="Review text"
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>);
}
