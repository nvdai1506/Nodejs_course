const path = require('path');

const express = require('express');


const router = express.Router();

let listUsers = [];
router.get('/', (req, res, next) => {
    res.render('users',{pageTitle:'Users', path:'users', users: listUsers});
})
router.post('/',(req, res, next)=>{
    listUsers.push({name: req.body.name});
    res.redirect('/users');
})

module.exports.router = router;
module.exports.listUsers = listUsers;
