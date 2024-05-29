// pages/IndexMenu.jsx
import React from 'react';
import Card from '../Card.jsx';

const IndexMenu = () => {
  return (
    <div>
      <Card title="Go to Movies List" link="/movies/list" />
      <Card title="Add a Movie" link="/movies/add" />
    </div>
  );
};

export default IndexMenu;
