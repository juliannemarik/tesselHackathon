const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/pillarsReview', {
  logging: false
});

module.exports = db;

