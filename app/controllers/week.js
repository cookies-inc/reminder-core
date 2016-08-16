module.exports = function(app) {

    var db        = app.get('db');
	var User      = app ? app.models.user      : null;
	var Blacklist = app ? app.models.blacklist : null;
	var Historic  = app ? app.models.historic  : null;

	var controller = {};

	controller.usersOfWeek = function(req, res) {
		var hist = [],
		totalUsers = 0;

		User.findAll({
		 where: { status: 'A'}
		})
		.then(function(users) {
			totalUsers = users.length;
		})
		.then(function() {
			Historic.findAll({
				attributes: ['userid'],
		    	order: [['date','DESC']], 
		    	limit: totalUsers-1
			})
			.then(function(results) {
				var inc = 0;
				results.forEach(function(entry) {
					hist[inc] = entry.userid;
					inc++;    				
				});
			})
			.then(function() {
				db.query('SELECT * FROM users WHERE id NOT IN (:id) ',
			  	{ replacements: { id: hist }, type: db.QueryTypes.SELECT }
				).then(function(user) {					
					console.log(user);
					res.json(user);
			    });
			});
		});
	};

	return controller;
}