// entrypoint
// DOTENV
// =========================================
if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require */
  require('dotenv').config({ path: 'development.env' });
  /* eslint-enable global-require */
}

// requires
const app = require('express')();

// components
const movies = require('./components/movies/routes');

// routes
app.use('/movies', movies);

// start
app.listen(8080, () => console.log('App listening at 8080'));
