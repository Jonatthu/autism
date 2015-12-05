var mongoose = require('mongoose'),
	uniqueValidator = require('mongoose-unique-validator');

var userSchema = mongoose.Schema({
	UserName: { type: String, required: '{PATH} is required!' },
	LastName: { type: String, required: '{PATH} is required!' },
	Name: { type: String, required: '{PATH} is required!' },
	Age: { type: String, required: '{PATH} is required!' },
	Avatar: { type: String, required: '{PATH} is required!' },
});


userSchema.plugin(uniqueValidator);

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
	User.find({}).exec(function (err, collection) {
		if (collection.length === 0) {
			User.create({
				UserName: 'Jonatthu',
				LastName: 'Nomelosse',
				Name: 'House',
				Age: '18',
				Avatar: 'https://ioculus.herokuapp.com/Static/img/avatar.jpg'
			});
		}
	});
};

exports.createDefaultUsers = createDefaultUsers;
