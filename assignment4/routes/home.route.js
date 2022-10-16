const path = require('path');

const express = require('express');

const rootDir = require('../util/rootDir.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home',{pageTitle: 'Home', path:'home'});
})


module.exports = router;