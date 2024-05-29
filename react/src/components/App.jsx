import React from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import MoviesList from './pages/MoviesList.jsx';
import IndexMenu from './pages/IndexMenu.jsx';
import MoviesAdd from "./MoviesAdd.jsx";


const App = () => {
  return (
    <Router>
        <Route exact path="/" component={IndexMenu} />
        <Route path="/movies/list" component={MoviesList} />
        <Route path="/movies/add" component={MoviesAdd} />
    </Router>
  );
};

export default App;