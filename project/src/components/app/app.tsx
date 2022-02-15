import Home from '../home/home';
import {MoviePageProps} from '../../types/MoviePage';
function App(props: MoviePageProps): JSX.Element {
  return (
    <Home { ...props } />);
}

export default App;
