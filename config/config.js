fs = require('fs');
var config = require('./config.json');

exports.getPort = function() {
	var port = process.env.PORT || 3000;
	return port;
}	