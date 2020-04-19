const Movie = require('../../../models/Movie');

async function listMovies(req, res) {
  const data = await Movie.findAll();

  res.json(data);
}

module.exports = listMovies;
