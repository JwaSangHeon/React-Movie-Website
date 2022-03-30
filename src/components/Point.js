import { PropTypes } from 'prop-types';
import styles from './Point.module.css';

function Point({title, backImg, titleImg, rating, runtime, genres, description}) {
  return<div>
    <img className={styles.backImg} src={backImg} alt={title} />
    <div className={styles.container}>
      <img className={styles.titleImg} src={titleImg} alt={title} />
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>{title}</h1> 
        <ul className={styles.ratingAndRuntime}>
          <li>Rating : {rating} / 10</li>
          <li>Runtime : {runtime}(min)</li>
        </ul>
        <ul className={styles.genres}>
        {/* xxx && xxx.map() -> 조건이 참이면 &&바로 뒤의 요소가 출력에 나타난다. 거짓이면 react는 무시하고 건너뛴다. */}
        {genres && genres.map((genre) => <li key={genre}>{genre}</li>)}
        <p className={styles.description}>{description}</p>
        </ul>
      </div>
    </div>
    </div>
}

Point.propType = {
  title : PropTypes.string.isRequired,
  backImg : PropTypes.string.isRequired,
  titleImg : PropTypes.string.isRequired,
  rating : PropTypes.string.isRequired,
  runtime : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Point;