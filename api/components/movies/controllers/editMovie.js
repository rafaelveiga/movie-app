const Movie = require('../../../models/Movie');

async function editMovie(req, res) {
  const {
    name,
    year,
    duration,
  } = req.body;

  const {
    movieId,
  } = req.params;

  await Movie.update({
    name,
    year,
    duration,
  }, {
    where: {
      id: movieId,
    }
  });

  res.json({ movieId });
}

module.exports = editMovie;
