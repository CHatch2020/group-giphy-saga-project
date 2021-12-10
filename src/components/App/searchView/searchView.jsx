import React, {useState}from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchView() {
  //ALIAS HOOKS
  const dispatch = useDispatch();
  const gifArray = useSelector((store) => store.searchResultReducer);
  //local state for holding user input
  const [ searchString, setSearchString ] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();

    dispatch({ 
        type: 'GIT_GIFFS', 
        payload: `&q=${searchString}&limit=10`
    });
  }

  const handleFave = (url) => {
    // console.log(gifArray[index].images.original.url)
    // const captureURL = gifArray[index].images.original.url;
    // console.log(captureURL)
    dispatch({
      type: 'HOLD_FAVE',
      payload: url
    })
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
        <ul>
        {gifArray.map((gif, i) => {
          return <li key={i}><img src={gif.images.original.url}/><button onClick={e => handleFave(gif.images.original.url)}>FAVE</button></li>
        })}
        </ul>
      </div>
    </div>
  )
};