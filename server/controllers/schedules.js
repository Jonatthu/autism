var mongoose = require('mongoose'),
	Schedules = mongoose.model('Schedule');

exports.GetAllSchedules = function (req, res) {
	Schedules.find({}).exec(function (err, collection) {
		res.json(collection);
	});
}

exports.DeteleSchedule = function (req, res) {
	Schedules.find({ _id: req.params.id })
		.remove()
		.exec(function (err, collection) {
			res.json(["Success"]);
		});
}

exports.NewSchedule = function (req, res) {
	var Body = [{ Description: req.params.des, Image: req.params.img }];
	console.log(Body);

	Schedules.create(Body, function (err, post) {
		if (err) {
			err = new Error('Something went wrong');
			res.status(400);
			return (res.send({
				reason: err.toString()
			}));
		}
		res.json(["success"]);
	});
}