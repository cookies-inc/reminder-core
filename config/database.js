var path      = require("path");
var Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || "development";
var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

exports.get = function() {
	var info = 'Project using environment '
	+ env +" - database name: "
	+ config.database + ' ('+config.dialect+')';
	console.log(info);

	var sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config.host);
	return sequelize;

}
