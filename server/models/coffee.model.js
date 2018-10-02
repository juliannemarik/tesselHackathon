const Sequelize = require ('sequelize');
const db = require ('./database');

// COFFEE MODEL DEFINITION
const Coffee = db.define('coffee', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ingredients: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  }
})

module.exports = Coffee;
