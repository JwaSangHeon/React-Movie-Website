import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

function Movie({id, titleImg, title, summary, genres}) {
  return <div className={styles.container}>
  <img className={styles.titleImg} src={titleImg} alt={title} />
  <div>
    <h2 className={styles.padding}><Link to={`/movie/${id}`} className={styles.link}>{title}</Link></h2>
    <ul className={styles.padding}>
      {genres.map((genre) => <li key={genre}>{genre}</li>)}
    </ul>
    <p className={styles.padding}>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
  </div>
</div>
}

Movie.propTypes = { 
  titleImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;