import {MoviePreviewProps} from '../../types/MoviePreviewProps';
import {forwardRef} from 'react';

/**
 * Превью проигрыватель для карточки фильма
 */
const MoviePreview = forwardRef<HTMLVideoElement, MoviePreviewProps>((x, ref) => (
  <video
    ref={ref}
    loop
    muted
    poster={`img/${(x.poster)}`}
  >
    <source src={x.preview} type="video/mp4"/>
  </video>
) );

MoviePreview.displayName = 'MoviePreview';

export default  MoviePreview;
