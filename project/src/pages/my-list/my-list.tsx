import SvgElement from '../../components/svg-element/svg-element';
import Header from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
import movies from '../../state/movies';
import MovieCard from '../../components/movie-card/movie-card';

export default function MyList () {
  return (
    <>
      <SvgElement/>

      <div className="user-page">
        <Header title="My list"/>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">
            {
              movies.map((movie) => (
                <MovieCard
                  key={`movie${movie.id}`}
                  {...movie}
                /> ))
            }
          </div>
        </section>
        <Footer/>
      </div>
    </>);
}
