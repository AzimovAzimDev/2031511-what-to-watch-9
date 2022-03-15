import {ChangeEventHandler} from 'react';
/**
 * Пропрсы для компоненты звездочки реввью
 */
export type RatingStatProps = {
  id: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
