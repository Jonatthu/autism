var mongoose = require('mongoose'),
	Schedules = mongoose.model('Schedule');

exports.GetAllSchedules = function (req, res) {
	Schedules.find({}).exec(function (err, collection) {
		res.json(collection[0]);
	});
}
