const Movie = require('../../../models/Movie');

async function listSingleMovie(req, res) {
  const {
    movieId
  } = req.params;

  const movie = await Movie.findByPk(movieId);

  res.json(movie);
}

module.exports = listSingleMovie;
