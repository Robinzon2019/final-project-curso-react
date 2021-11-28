import { useState } from "react";
import FormSearch from "./FormSearch";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";
import axios from "axios";

const MoviesList = () => {
  const [textSearch, setTextSearch] = useState("");
  const [category, setCategory] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([...movies]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/all/day?api_key=76b3f65a7264db3196fc222e1ade510d")
      .then((resp) =>setMovies([...resp.data.results]))
      .catch((error) => console.log(error));
    return () => console.log("Componente ha sido desmontado");
  }, []);
  const handleChangeText = (e) => {
    setTextSearch(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredMovies(() => getFilteredMovies());
  };

  const getFilteredMovies = () => {
    return [
      ...movies
        .filter((p) =>
          p.original_title?.toLowerCase().includes(textSearch.toLowerCase())
        )
        .filter((r) => (category !== "" ? r.categoria === category : r)),
    ];
  };
  return (
    <>
      <h1>Product List</h1>
      <FormSearch
        text={textSearch}
        category={category}
        onChangeText={handleChangeText}
        onChangeCategory={handleChangeCategory}
        categories={[...new Set(movies.map((p) => p.categoria))]}
        onSubmit={handleSubmit}
      />
      <MovieCard movies={getFilteredMovies()}></MovieCard>
    </>
  );
};

export default MoviesList;