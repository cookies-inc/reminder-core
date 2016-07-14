module.exports = function(app) {
	var User  = app.models.user;
	var controller = {};

	controller.getAll = function() {
		console.log('Ola');
	};

 	controller.create = function(req, res) {

		var pfirstname = req.body.firstname
				,plastname = req.body.lastname
				,pemail = req.body.email
				,ppassword = req.body.password
				,pidfacebook = req.body.idfacebook;

		if (!(pfirstname && plastname && pemail && ppassword)) {
			res.sendStatus(200);
			res.end();
			console.log('All needed params not found');
			return;
		}

		User.sync().then(function() {

			var data = {
				firstname:  pfirstname,
				lastname: plastname,
				email: pemail,
				password: ppassword,
				idfacebook: pidfacebook
			}

			User.create(data).then(function(newUser) {
				console.log(newUser.get({
					plain: true
				}));
			});
		});
		res.sendStatus(200);
		res.end();
	};

	controller.read = function(req, res) {
		 var idParam = req.params.id;
		 if (idParam) {
			 User.findAll({
				 where: {
					 id: idParam
				 }
			 }).then(function(user) {
				 res.json(user);
			 });
		 } else {
			 User.findAll().then(function(user) {
				 res.json(user);
			 });
		 }

	};

	controller.update = function(req, res) {

	};

	controller.delete = function(req, res) {
		var cod = req.params.id;
		console.log('will delete '+cod);
		if (cod) {
			User.destroy({
				where: {
	      id: cod
	    }}).then(function(result) {
				console.log(result);
	    });
		}
	};

	return controller;

}
