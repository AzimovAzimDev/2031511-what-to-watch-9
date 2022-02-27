import SvgElement from '../../components/svg-element/svg-element';
import Header from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
import {MovieList} from '../../components/movie-list/movie-list';
import movies from '../../state/movies';

export default function MyList () {
  return (
    <>
      <SvgElement/>

      <div className="user-page">
        <Header title="My list"/>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <MovieList list={movies} />
        </section>
        <Footer/>
      </div>
    </>);
}
