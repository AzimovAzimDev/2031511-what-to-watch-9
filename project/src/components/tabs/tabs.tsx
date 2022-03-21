import TabItem from './tab-item';
import {TabsProps} from '../../types/Tabs';

/**
 * Компонента для отображения вкладок/табок фильма
 */
export default function Tabs({items, onSelect}: TabsProps) {
  return (
    <ul className="film-nav__list">
      {items.map((item, index) => {
        const key = `tab-${index}`;
        return (
          <TabItem
            key={key}
            {...item}
            onSelect={onSelect}
          />
        );
      })}
    </ul>
  );
}
