var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/autism',
		rootPath: rootPath,
		host: 'localhost',
  		method: 'GET',
		port: process.env.PORT || 3000
	},
	production: {
		db: 'mongodb://autism:autism@ds061974.mongolab.com:61974/autism',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
};
