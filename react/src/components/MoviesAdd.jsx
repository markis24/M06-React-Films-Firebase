// pages/MoviesAdd.jsx
import React, { useState } from 'react';
import { addDocument } from '../components/config/config.js';

const MoviesAdd = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [direction, setDirection] = useState('');
  const [image, setImage] = useState('');
  const [rate, setRate] = useState(1);
  const [year, setYear] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      direction,
      image,
      rate,
      year,
      duration
    };
    await addDocument('movies', newMovie);
    // Clear the form
    setTitle('');
    setDescription('');
    setDirection('');
    setImage('');
    setRate(1);
    setYear('');
    setDuration('');
  };

  return (
      <form onSubmit={handleSubmit}>
          <div>
              <label>Title:</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} required/>
          </div>
          <div>
              <label>Description:</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} required/>
          </div>
          <div>
              <label>Direction:</label>
              <input value={direction} onChange={(e) => setDirection(e.target.value)} required/>
          </div>
          <div>
              <label>Image URL:</label>
              <input value={image} onChange={(e) => setImage(e.target.value)} required/>
          </div>
          <div>
              <label>Rate (1-5):</label>
              <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} min="1" max="5" required/>
          </div>
          <div>
              <label>Year:</label>
              <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required/>
          </div>
          <div>
              <label>Duration (minutes):</label>
              <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required/>
          </div>
          <button type="submit">Add Movie</button>
      </form>
  );
};

export default MoviesAdd;
