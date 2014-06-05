var express      = require('express'),
	bodyParser   = require('body-parser'),
	cookieParser = require('cookie-parser'),
	session      = require('express-session'),
	passport     = require('passport'),
	flash        = require('connect-flash');
	mongoose     = require("mongoose"),
	userRouter   = require("./controllers/user");

var app = express();


// connect to Mongo when the app initializes
var uristring = process.env.MONGOLAB_URI || 'mongodb://localhost/circle_test';

mongoose.connect(uristring);

mongoose.connection
.on('error', console.error.bind(console, 'connection error:'))
.once('open', function callback () {
  console.log("connected to mongodb!");
});


require('./config/passport')(passport);

	// app.use(express.logger('dev'));
	app.use(cookieParser());
	app.use(bodyParser());

	app.use(session({ secret: 'donthackusplease' }));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());

require('./controllers/user')(app, passport);


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});




