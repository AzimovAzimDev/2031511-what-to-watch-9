import {Link} from 'react-router-dom';
import {TabItemProps} from '../../types/Tabs';

/**
 * Элемент таба
 */
export default function TabItem(props: TabItemProps) {
  return (
    //film-nav__item--active
    <li className="film-nav__item">
      <Link
        to={props.to}
        className="film-nav__link"

      >
        {props.title}
      </Link>
    </li>);
}
