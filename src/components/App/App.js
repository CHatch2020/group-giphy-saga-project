import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import SearchView from './searchView/searchView.jsx';


function App(props) {
  return (
    <div>
      <SearchView/>
    </div>
  );
}

export default App;
