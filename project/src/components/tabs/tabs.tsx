import {TabsProps} from '../../types/Tabs';

/**
 * Компонента для отображения вкладок/табок фильма
 */
export default function Tabs({className, children }: TabsProps) {
  return (
    <ul className={className}>
      {children}
    </ul>
  );
}
