const sequelize = require('../config/db');
const { Model, STRING, INTEGER } = require('sequelize');

class Movie extends Model {}
Movie.init({
  name: {
    type: STRING,
    allowNull: false,
  },
  year: {
    type: INTEGER,
    allowNull: false,
  },
  duration: {
    type: STRING,
    allowNull: false,
  }
}, { sequelize })

module.exports = Movie;
