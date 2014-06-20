var User = require("../models/user");

module.exports = function(app, passport) {

	app.post('/login', passport.authenticate('local-login'), function(req, res) {
		console.log('login:', req.body);
		console.log('session:', req.session);
		console.log('session id:', req.session.id);
		res.send({success: 1},200);
	});

	app.post('/signup', passport.authenticate('local-signup'), function(req, res) {
		console.log('signup:', req.body);
		res.send({success: 1},200);
	});

	app.post('/post_test', function(req, res) {
		console.log(req.body);
		res.send(200)
	})
};
