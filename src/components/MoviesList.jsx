import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
//import axios from "axios";


const MovieList = () => {

    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);
    let i = 0;

    useEffect(() => {
        // axios
        // .get("https://api.themoviedb.org/3/movie/550?api_key=76b3f65a7264db3196fc222e1ade510d")
        // .then((resp) => {
        //     setMovies([...resp.data])
        //     console.log(resp);
        // })
        // .catch((error) => console.log(error));
      fetch('https://api.themoviedb.org/3/trending/all/day?api_key=76b3f65a7264db3196fc222e1ade510d')
          .then(response => response.json())
          .then( data => {
              //console.log(data);
              data.forEach(myFunction);

              function myFunction(item, index, arr) {
                const movieData = {
                  title: data.results[index].name,
                  popularity: data.results[index].popularity,
                  overview: data.results[index].overview,
                  poster_path: data.results[index].poster_path
                };

                setMovies(movieData);
                console.log(data);

              }

              // const movieData = {
              //   title: data.results[0].name,
              //   popularity: data.results[0].popularity,
              //   overview: data.results[0].overview,
              //   poster_path: data.results[0].poster_path
              // };
              

              
            
            
              setLoading(false);
              console.log('movies: ' + movies);
            })
          .catch(error => console.log(error))

          //setMovieTitle("Moana");
      return () => console.log("Componente ha sido desmontado");

    }, []);

    return(
        <>
            {loading ? (<div className="spinner-border text-primary" role="status">
                <span className="visually-hidden"></span>
            </div>) : null }

            {movies ? (<MovieCard movies={movies} />) : null}
        </>
    );

}

export default MovieList;