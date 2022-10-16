const path = require('path');

const express=require('express');
const bodyParser = require('body-parser');


const Home= require('./routes/home.route.js');
const Users = require('./routes/users.route.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use('/', Home);
app.use('/users',Users);

app.listen(3000);