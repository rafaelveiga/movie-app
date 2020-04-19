const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

// base /movies
router.get('/', controllers.listMovies);
// router.get('/:movieId');
// router.post('/');
// router.put('/:movieId');
// router.delete('/:movieId');

module.exports = router;