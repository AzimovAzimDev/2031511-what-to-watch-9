import {TabItemProps} from '../../types/Tabs';

/**
 * Элемент таба
 */
export default function TabItem(props: TabItemProps) {
  return (
    <li
      className={props.className}
      onClick={() => { props.onSelect(props.id);} }
    >
      <span >
        {props.title}
      </span>
    </li>);
}
