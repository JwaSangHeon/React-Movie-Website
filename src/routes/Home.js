import { useState, useEffect } from 'react';
import Loding from '../components/Loding';
import Movie from '../components/Movie';
import styles from './Home.module.css';

function Home(){
  const [loading, setLoaing] = useState(true); 
  const [movies, setMovies] = useState([]);
  const getMovie = async() => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)).json();
    setMovies(json.data.movies);
    setLoaing(false);
  }
  useEffect(() => {
    getMovie();
  },[]);

  return (
  <div>
    {loading ? <Loding />
    : 
    <div>
  {movies.map((movie) => 
  <Movie
    id={movie.id}
    key={movie.id}
    titleImg={movie.medium_cover_image} 
    title={movie.title} 
    summary={movie.summary}
    genres = {movie.genres}
  />)}
  </div>
}
  </div>
  );
}

export default Home;