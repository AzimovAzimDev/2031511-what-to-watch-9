import {RatingStatProps} from '../../types/RatingStat';

/**
 * Значек звезды для выставления оценки
 */
export function RatingStar({id, onChange}: RatingStatProps) {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${id}`}
        type="radio"
        name="rating"
        onChange={onChange}
      />
      <label
        className="rating__label"
        htmlFor={`star-${id}`}
      >Rating 10
      </label>
    </>
  );
}
