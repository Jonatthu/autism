var mongoose = require('mongoose'),
	uniqueValidator = require('mongoose-unique-validator');

var ScheduleSchema = mongoose.Schema({
	Description: { type: String, required: '{PATH} is required!' },
	Image: { type: String, required: '{PATH} is required!' }
});


ScheduleSchema.plugin(uniqueValidator);

var Schedule = mongoose.model('Schedule', ScheduleSchema);

function createDefaultSchedules() {
	Schedule.find({}).exec(function (err, collection) {
		if (collection.length === 0) {
			Schedule.create({
				Description: 'Jonatthu',
				Image: 'Nomelosse'
			});
		}
	});
};

exports.createDefaultSchedules = createDefaultSchedules;
