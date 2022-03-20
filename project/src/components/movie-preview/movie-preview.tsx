import {MoviePreviewProps} from '../../types/MoviePreviewProps';

/**
 * Превью проигрыватель для карточки фильма
 */
export default function MoviePreview (props: MoviePreviewProps) {
  return (
    <video width="280" height="175" loop muted poster={`img/${props.poster}`}>
      <source src={props.preview} type="video/mp4"/>
    </video>
  );
}
