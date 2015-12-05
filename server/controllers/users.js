var mongoose = require('mongoose'),
	User = mongoose.model('User');

exports.getUserProfile = function (req, res) {
	User.find({}).exec(function (err, collection) {
		res.json(collection[0]);
	});
}
