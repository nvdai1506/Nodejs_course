const path = require('path');

const express=require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

const Home= require('./routes/home.route.js');
const Users = require('./routes/users.route.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use('/', Home);
app.use('/users',Users.router);

app.listen(3000);