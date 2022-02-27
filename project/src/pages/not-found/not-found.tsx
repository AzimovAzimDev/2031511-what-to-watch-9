import SvgElement from '../../components/svg-element/svg-element';
import './not-found.scss';

export default function NotFound () {
  return (
    <>
      <SvgElement/>

      <div className="user-page">
        <div className="not-found">
          <h1 className="not-found__title">
            404
          </h1>
          <p className="not-found__description">The page you try to fund deleted or does not exist</p>
          <button className="not-found__btn">home page</button>
        </div>
      </div>
    </>);
}
