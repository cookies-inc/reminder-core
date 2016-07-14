var http = require('http');
var app = require('./config/express')();

var port = app.get('port');

http.createServer(app).listen(port, function() {
	console.log('Express server running on port ' + port)
});	

