import {RatingStatProps} from '../../types/RatingStat';

/**
 * Значек звезды для выставления оценки
 */
export function RatingStar({checked = false, id, onChange}: RatingStatProps) {
  return (
    <>
      <input
        id={`star-${id}`}
        checked={checked}
        value={id}
        name="rating"
        type="checkbox"
        className="rating__input"
        onChange={() => onChange(id)}
      />
      <label
        htmlFor={`star-${id}`}
        className="rating__label"
      >
      Rating {id}
      </label>
    </>
  );
}
