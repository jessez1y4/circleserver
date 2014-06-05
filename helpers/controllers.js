// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated()){
		return next();
	}

	// if not send error message
	res.send({
		error: 'User not logged in.'
	}, 500);
}
