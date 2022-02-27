import Logo from '../logo/logo';
import {HeaderProps} from '../../types/HeaderProps';

export default function Header (props: HeaderProps) {
  return (
    <header className="page-header user-page__head">
      <Logo/>
      <h1 className="page-title user-page__title"> { props.title } </h1>
      { props.isLogined && (
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>) }
    </header>);
}
