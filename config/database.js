var path      = require("path");
var Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || "development_sqlite";
var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

exports.get = function() {

	var info = 'Project using environment '
	+ env +" - database name: "
	+ config.database + ' ('+config.dialect+')';
	
	console.log(info);

	var sequelize = new Sequelize('test', null, null, {
		dialect: 'sqlite',
        storage: './app/data/development.sqlite'
	});

	sequelize
  	.sync() //{ force: true } = drop
  	.then(function(err) {
    	console.log('It worked!');
  	}, function (err) { 
    	console.log('An error occurred while creating the table:', err);
  	});

	return sequelize;

}
