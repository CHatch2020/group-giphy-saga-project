## Search View
[ ] Component Folder/.jsx

- Allow a user to enter a search string and submit a search request.
[ ] input/button that takes in the search string
  - local state to hold the user input
  - button handler that fires off a dispatch to a SAGA that sends the query to giphy api

[ 👍 ] Query the Giphy API Search Endpoint with the given search string FROM THE SERVER.
  - lives in a SAGA on index.js
  - include the user ?searchStringQuery and limit ~10
  
[ ] Display the results on the DOM.
  - store the results of the GET in a Array reducer for mapping purposes
  - gifResults.map((gif, i) => {
    return <li key={i}><img gif.url><button onClick={handleFave}>FAVORITE</button></li>
  })

[ 👍 ] Allow a user to Favorite any of the resulting images. You'll need to think about what information to save to your own database. Generally you only store the minimum needed to show this image again on the Favorites View.
  - clicking Favorite the handleFave() would grab the corresponding gif URL and
  - dispatch it to a SAGA that POSTS to the DB

- building of the form elements and the map in the return()
- building of the state/functionality/dispatches in SearchView
- building of the SAGA/Reducers axios routes on index.js
- building of the Server routes that correspond to the axios stuff

1 building Favorite View - Caleb
2 building POST route on server to DB
3 building GET route from DB to index reducer for FavoriteView
4 look up and finish the DB table FOREIGN KEY or REFERS to - Vic

## Favorites View
[ ] Component Folder/.jsx
Allow a user to see all of the Giphy images they have Favorited. The actual images need to appear on the DOM.

[ ] SAGA that GETS from the DB the favorited gif urls and the category
  - JOIN of favegif and category
 - stashes them in a Reducer [] of dbrows
 - useSelector in FaveView to grab that Reducer
 - MAP THAT SHT

[ ] Allow a user to set a category for a favorite image.
  - VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme') EXAMPLES
  - dropdown or radial for user to set category 
  - Dispatches to SAGA that PUTS that user input data to category table
Each favorite image can only have 1 category at a time.
The category needs to be one of the categories in the database.


Existing Routes
You are given two router modules on the server with stubs for the routes you may need.

GET /api/category (complete)

Returns a list of all categories from the table ordered by name. You may test it if your server is running: http://localhost:5000/api/category
POST /api/favorite (incomplete)

For adding a new favorite image. You'll need to think about what is needed. Does it need a category?
PUT /api/favorite (incomplete)

For setting a category on an image. It expects both a query parameter and a data body. Feel free to change it as needed.
