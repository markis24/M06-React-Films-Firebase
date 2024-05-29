import React, { useEffect, useState } from 'react';
import { getDocuments } from '../config/database.js';
import MovieCard from "../MovieCard.jsx";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesList = await getDocuments('movies');
      setMovies(moviesList);
    };

    fetchMovies();
  }, []);

  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={movie.image}
          rate={movie.rate}
          direction={movie.direction}
        />
      ))}
    </div>
  );
};

export default MoviesList;
