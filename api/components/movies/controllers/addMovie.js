const Movie = require('../../../models/Movie');

async function addMovie(req, res) {
  const {
    name,
    year,
    duration,
  } = req.body;

  const createdMovie = await Movie.create({
    name,
    year,
    duration,
  });

  res.json({ movieId: createdMovie.id });
}

module.exports = addMovie;
