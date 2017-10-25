var express     = require('express');
var app    = require('./app');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var con         = require('./app/connection')
var bcrypt      = require('bcrypt');

var jwt    = require('jsonwebtoken');
var config = require('./config');

var users = require('./app/routes/users')
var bigRequests = require('./app/routes/bigRequests')


//config

var port = process.env.PORT || 8080;
con.connect(function() {console.log('connected to database')})

app.set('superSecret', config.secret);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//routes
// basic route (http://localhost:8080)

app.get('/', function(req, res) {
	res.send('Hello! The API is at http://localhost:' + port + '/api');
});

var apiRoutes = express.Router();


//setup the database

apiRoutes.get('/setup', bigRequests.setup);
// apiRoutes.get('/fuckup', bigRequests.fuckup);



apiRoutes.post('/register', users.register);
apiRoutes.post('/authenticate', users.authenticate);


// route middleware

apiRoutes.use(function(req, res, next) {

	var token = req.body.token || req.query['token'] || req.headers['x-access-token'];
	if (token) {
		jwt.verify(token, app.get('superSecret'), function(err, decoded) {
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		return res.status(403).send({
			success: false,
			message: 'No token provided.'
		});
	}
});


// authenticated routes

apiRoutes.get('/', function(req, res) {
	res.json({ message: 'API' });
});

apiRoutes.get('/check', function(req, res) {
	res.json(req.decoded);
});

apiRoutes.get('/info', bigRequests.info)

app.use('/api', apiRoutes);


// start the server

app.listen(port);
console.log('Launched : http://localhost:' + port);
