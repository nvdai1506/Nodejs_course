const path = require('path');

const express = require('express');

const rootDir = require('../util/rootDir.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','users.html'));
})
router.post('/',(req, res, next)=>{
    console.log(req.body.name);
    res.redirect('/');
})

module.exports = router;