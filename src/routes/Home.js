import { useEffect, useState } from "react";
import Movie from "../components/Movie";
//import Movie from ""

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => { //then과 동일(async)
      const response = await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year'
      );
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false); //로딩을 끝냈으니 setLoading을 false로
    };
    useEffect(() => {
      getMovies();
    }, []);
    return ( //map에는 key가 필요하다!!
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {movies.map((movie) => (
              <Movie
                key={movie.id} //the key is for reactJS, only when you are rendering component inside map
                id={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title} year={movie.year}
                summary={movie.summary} 
                genres={movie.genres}
               />
            ))}
          </div>
        )}
      </div>
    );
}

export default Home;