import TabItem from './tab-item';
import {TabsProps} from '../../types/Tabs';

/**
 * Компонента для отображения вкладок/табок фильма
 */
export default function Tabs({items, activeId, onSelect}: TabsProps) {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {items.map((item, index) => {
          const key = `tab-${index}`;
          return (
            <TabItem
              key={key}
              {...item}
              isActive={activeId === item.id}
              onSelect={onSelect}
            />
          );
        })}
      </ul>
    </nav>
  );
}
