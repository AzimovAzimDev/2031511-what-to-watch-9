import {TabItemProps} from '../../types/Tabs';

/**
 * Элемент таба
 */
export default function TabItem(props: TabItemProps) {
  return (
    <li
      className={`film-nav__item  ${props.isActive && 'film-nav__item--active'}`}
      onClick={() => { props.onSelect(props.id);} }
    >
      <span
        className="film-nav__link"
      >
        {props.title}
      </span>
    </li>);
}
