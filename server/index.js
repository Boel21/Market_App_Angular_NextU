const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
MongoClient = require('mongodb').MongoClient

const app = express();

// connection to db
mongoose.connect('mongodb://localhost:27017/my_market_db',{ useNewUrlParser: true })
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// importing routes
const indexRoutes = require('./routes/routes');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:4200'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
app.use(session({
	secret:"joelmarket123",
	resave:false,
	saveUninitialized:false,
}));

// routes
app.use('/', indexRoutes);


app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
