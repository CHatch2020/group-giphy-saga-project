import { useSelector } from "react-redux";


export default function FavoriteView() {
    // const favGif = useSelector(store => store.reducer);

  return (
    <div>
      <h2>Your Favorites!</h2>
      {/* <ul>
        {favGif.map((gif, i) => {
          return (
            <li key={i}>
              {gif}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}
