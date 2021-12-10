import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react';


export default function FavoriteView() {
    const favGif = useSelector(store => store.faveGifReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_FAVES',
        })
    }, [])

    console.log(favGif);
  return (
    <div>
      <h2>Your Favorites!</h2>
      <ul>
        {favGif.map((gif) => {
          return <li key={gif.id}> <img src={gif.url}/> </li>
        })}
      </ul>
    </div>
  );
}
