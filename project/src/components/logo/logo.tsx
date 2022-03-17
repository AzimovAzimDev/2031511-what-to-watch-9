import {Link} from 'react-router-dom';
import {home} from '../../routes/routes';

export default function Logo ({isLight = false} : {isLight?: boolean}) {
  return (
    <Link to={home.path}>
      <div className="logo">
        <a className={ `logo__link ${  isLight ? 'logo__link--light' : ''}`}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
    </Link>
  );
}
