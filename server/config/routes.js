var schedule = require('../controllers/schedules'),
	mongoose = require('mongoose');

module.exports = function (app) {

    //Routes for Apps
	app.post('/api/postPlaylist', videos.createPlaylist);

    //Routes for Oculus
	app.get('/oculus/getplaylist/', videos.getPlaylist);
	app.get('/oculus/getuser/', users.getUserProfile);
	
    //Connect with the partials in public
	app.get('/partials/*', function (request, response) {
		response.render('../../public/App/' + request.params[0]);
	});

	app.all('/api/*', function (req, res) {
		res.sendStatus(404);
	});

	app.get('*', function (request, response) {
		response.render('index', {
			iOculusUser: request.user,
		});
	});
};
