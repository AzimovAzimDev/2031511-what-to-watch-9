import {TabItemProps} from '../../types/Tabs';

/**
 * Элемент таба
 */
export default function TabItem(props: TabItemProps) {
  return (
    //film-nav__item--active
    <li
      className="film-nav__item"
      onClick={() => { props.onSelect(props.id);} }
    >
      <span
        className="film-nav__link"
      >
        {props.title}
      </span>
    </li>);
}
