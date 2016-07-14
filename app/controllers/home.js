module.exports = function() {
	var controller = {};

	controller.home = function(req, res) {
		res.render('home', {nome: 'Reminder API Nodejs'});
	};

	return controller;
}
