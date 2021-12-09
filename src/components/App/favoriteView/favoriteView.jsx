import React, {useState}from 'react';
import { useDispatch } from 'react-redux';

export default function FavoriteView() {
  //ALIAS HOOKS
  const dispatch = useDispatch();
  //local state for holding user input
  const [ searchString, setSearchString ] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();

    dispatch({ 
        type: 'GIT_GIFFS', 
        payload: `&q=${searchString}&limit=10`
    });
  }

  return(
    <div>
      <h3> Would You Kindly Provide a Query? </h3>
      <div>
        <form onSubmit={submitSearch}>
          <input
            placeholder="GIPHY SEARCH"
            value={searchString}
            onChange={e => setSearchString(e.target.value)}
          />
          <button type='submit'>GIT GIFF</button>
        </form>
      </div>

      <h3>BEHOLD GIFS FROM THE INTERNET</h3>
      <div>
        {/* MAP THROUGH RESULTS */}
      </div>
    </div>
  )
};