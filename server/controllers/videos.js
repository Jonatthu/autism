var mongoose = require('mongoose'),
	Video = mongoose.model('Video');

exports.getPlaylist = function (req, res) {
	Video.find({}).exec(function (err, collection) {
		res.json(collection);
	});
}

exports.createPlaylist = function (req, res) {
	var postdata = req.body;
	postdata.featured = true;
	Video.create(postdata, function (err, post) {
		if (err) {
			err = new Error('Something went wrong');
			res.status(400);
			return (res.send({
				reason: err.toString()
			}));
		}
		res.send(post);
	});
	
}