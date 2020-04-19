const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

// base /movies
router.get('/', controllers.listMovies);
router.get('/:movieId', controllers.listSingleMovie);
router.post('/', controllers.addMovie);
router.put('/:movieId', controllers.editMovie);
router.delete('/:movieId', controllers.deleteMovie);

module.exports = router;