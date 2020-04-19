const Movie = require('../../../models/Movie');

async function deleteMovie(req, res) {
  const {
    movieId
  } = req.params;

  await Movie.destroy({ where: { id: movieId }});

  res.json({ status: 'success' });
}

module.exports = deleteMovie;
