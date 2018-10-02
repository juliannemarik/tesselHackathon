const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/[insertDBNAME]', {
  logging: false
});

module.exports = db;

