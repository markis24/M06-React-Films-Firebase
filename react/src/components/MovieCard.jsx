// components/MovieCard.jsx
import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ title, image, rate, direction }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={`${title} poster`} />
      <div className="movie-details">
        <h3>{title}</h3>
        <p><strong>Direction:</strong> {direction}</p>
        <p><strong>Rate:</strong> {rate}/5</p>
      </div>
    </div>
  );
};

export default MovieCard;
