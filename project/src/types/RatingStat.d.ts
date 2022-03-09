/**
 * Пропрсы для компоненты звездочки реввью
 */
export type RatingStatProps = {
  id: number;
  checked: boolean;
  onChange: (id: number) => void;
}
