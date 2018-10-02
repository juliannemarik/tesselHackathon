const express = require('express');
const app = express();
const volleyball = require('volleyball');
const path = require('path')
const { db }= require ('./models');

// EXPRESS MIDDLEWARE
app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTING MIDDLEWARE
// app.use('/', require('./')); // INSERT ROUTE

// SYNCH THE DATABASE & LISTEN TO PORT
const PORT = 8080;
db.sync({force: true})

app.listen(PORT, () => console.log(`

    Listening on port ${PORT}

    http://localhost:${PORT}/

`))

