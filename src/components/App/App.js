import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import SearchView from "./searchView/searchView.jsx";
import FavoriteView from "./favoriteView/favoriteView";
import "./App.css";

function App(props) {
  return (
    <div className="body">
      <header>
        <h1>Giphy Search!</h1>
      </header>

      <Router>
        <p>
          <Link to="/">Search</Link>
        </p>
        <p>
          <Link to="/favorite">Favorites</Link>
        </p>

        <Route exact path="/">
          <SearchView />
        </Route>

        <Route exact path="/favorite">
          <FavoriteView />
        </Route>
      </Router>
    </div>
  );
}

export default App;
