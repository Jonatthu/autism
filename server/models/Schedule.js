var mongoose = require('mongoose');

var ScheduleSchema = mongoose.Schema({
	Description: { type: String },
	Image: { type: String }
});

var Schedule = mongoose.model('Schedule', ScheduleSchema);

function createDefaultSchedules() {
	Schedule.find({}).exec(function (err, collection) {
		if (collection.length === 0) {
			console.log("Crear BD");
			Schedule.create({
				Description: 'Jonatthu',
				Image: 'Nomelosse'
			});
		}
	});
};

exports.createDefaultSchedules = createDefaultSchedules;
