var express = require('express')
	,load = require('express-load')
	,bodyParser = require('body-parser')
	,sequelize = require('sequelize')
	,config = require('./config.js')
	,database = require('./database.js')
	db = database.get();

module.exports = function() {

	var app = express();
  var port = config.getPort();

	app.set('port',port);
	app.set('sequelize',sequelize);
	app.set('db',db);

	app.use(express.static('./public'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(require('method-override')());

	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	load('models', {cwd: 'app'})
	.then('controllers')
	.then('routes')
	.into(app);

	return app;
	
};
