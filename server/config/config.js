var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/iOculus',
		rootPath: rootPath,
		host: 'localhost',
  		method: 'GET',
		port: process.env.PORT || 3000
	},
	production: {
		db: 'mongodb://jonatthu:J45t10n50@ds053954.mongolab.com:53954/ioculus',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
};
