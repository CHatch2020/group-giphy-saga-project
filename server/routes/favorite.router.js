const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM faveGif';
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT GIF query', err);
      res.sendStatus(500);
    });
});

// Add a new favorite gif url from SearchView
router.post('/', (req, res) => {
  console.log(req.body);
  const favedGif = req.body;
  const queryText = `INSERT INTO favegif ("url")
                    VALUES ($1)`;
  const queryValues = [
    favedGif.url
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing ADD GIF query', err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
