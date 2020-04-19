const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

// base /movies
router.get('/', controllers.listMovies);
router.get('/:movieId', controllers.listSingleMovie);
router.post('/', controllers.addMovie);
// router.put('/:movieId');
// router.delete('/:movieId');

module.exports = router;