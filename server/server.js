const express = require('express');
const bodyParser = require('body-parser');

//Important stuff
require('dotenv').config();
const axios = require('axios');

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5000;

// Route includes
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Routes
app.use('/api/favorite', favoriteRouter);
app.use('/api/category', categoryRouter);

app.post('/gifs', (req, res) => {
  const apiKey = process.env.API_KEY;
  console.log(req.body)
  axios({
      method: 'GET',
      url: `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${req.body.q}&limit=${req.body.limit}`
  }).then((APIres) => {
    console.log(APIres.data)
    //HOW DO we catch this response on 
      res.send(APIres.data);
  }).catch((err) => {
      console.log('not hitting GIPHY api', err);
  });
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
