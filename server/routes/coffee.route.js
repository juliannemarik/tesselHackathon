const express = require('express');
const router = express.Router();
const { db, Pug, Coffee } = require('../models/index');

router.get('/', async (req, res) => {
  res.json(await Coffee.findAll());
})

module.exports = router;
