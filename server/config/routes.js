var schedule = require('../controllers/schedules'),
	mongoose = require('mongoose');

module.exports = function (app) {

    //Routes for Apps
	app.get('/api/GetAllSchedules', schedule.GetAllSchedules);
	app.get('/api/Delete/:id', schedule.DeteleSchedule);
	app.post('/api/NewSchedule', schedule.NewSchedule);
	
	
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
