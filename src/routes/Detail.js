import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Point from '../components/Point';
import Loding from '../components/Loding';

function Detail() {
  const[loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const {id} = useParams();

  const getMovie = async() => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
  }
  useEffect(() =>{
    getMovie();
  },[]);
  
  return <div>
    {loading ? <Loding /> : <Point 
    title = {movie.title}
    backImg = {movie.background_image}
    titleImg = {movie.large_cover_image} 
    rating = {movie.rating} 
    runtime = {movie.runtime} 
    genres = {movie.genres}
    description = {movie.description_intro}
    />}
    
    </div>
}

export default Detail;