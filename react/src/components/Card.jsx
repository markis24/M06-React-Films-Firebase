import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({ title, link }) => {
  return (
    <div className="card">
      <Link to={link}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default Card;
