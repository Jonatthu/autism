var mongoose = require('mongoose'),
	uniqueValidator = require('mongoose-unique-validator');

var videoSchema = mongoose.Schema({
	VideoId: { type: String },
	Description: { type: String },
	Title: { type: String },
	ChannelName: { type: String },
	Duration: { type: String },
	Thumbnail: { type: String }
});


videoSchema.plugin(uniqueValidator);

var Video = mongoose.model('Video', videoSchema);

function createDefaultVideos() {
	Video.find({}).exec(function (err, collection) {
		if (collection.length === 0) {
			Video.create({
				VideoId: 'qd4pMykGn9g',
				Description: 'its from the second OVA a series of short stories this one in particular caught my attention',
				Title: 'Nanatsu no Taizai Hawk and Meliodas first meeting',
				ChannelName: 'Ahmed Otaku',
				Duration: '3:49',
				Thumbnail: 'https://i.ytimg.com/vi_webp/qd4pMykGn9g/default.webp'
			});
			Video.create({
				VideoId: 'bd61zbDBplc',
				Description: 'its from the second OVA a series of short stories this one in particular caught my attention',
				Title: 'One Punch Man OP/Opening',
				ChannelName: 'Ahmed Otaku',
				Duration: '1:26',
				Thumbnail: 'https://i.ytimg.com/vi_webp/bd61zbDBplc/default.webp'
			});
		} 
	});
};

exports.createDefaultVideos = createDefaultVideos;