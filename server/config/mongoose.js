var mongoose = require('mongoose'),
	ScheduleModel = require('../models/Schedule');

module.exports = function (config) {
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function (callback) {
		console.log('Schedule db opened');
	});
	
	ScheduleModel.createDefaultUsers();
};







 