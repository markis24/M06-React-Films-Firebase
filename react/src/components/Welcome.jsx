import React from 'react';
import './Welcome.css';

const Welcome = ({ username }) => {
  return (
    <div className="welcome">
      <h1>Hola, {username}!</h1>
      <p>Pel·lícules per a l’estiu</p>
    </div>
  );
};

export default Welcome;
