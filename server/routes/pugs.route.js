const express = require('express');
const Sequelize = require('sequelize');
const router = express.Router();
const { db, Pug, Coffee } = require('../models/index');

router.get('/', async (req, res) => {
  const favoriteCoffee = 'Puppacino';
  const favoriteCoffeeId = await Coffee.findOne({
    where: {
      name: favoriteCoffee
    }
  });
  console.log('COFFEE ID ---->', favoriteCoffeeId.id);
  const pugs = await Pug.findAll({
    include: [{
      model: Coffee,
      as: 'favoriteCoffee',
      where: {
        id: favoriteCoffeeId.id
      }
    }]
  })
  // const pugs = await Pug.findAll();
  res.json(pugs);
})

module.exports = router;


