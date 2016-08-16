module.exports = function(app) {

	var User = app ? app.models.user : null;
	var controller = {};

	controller.getAll = function() {
		console.log('Ola');
	};

  var paramsIsNull = function(pname, pemail) {
		return !(pname && pemail);
	};

	controller.paramsIsNull = paramsIsNull;

 	controller.create = function(req, res) {
		var pname = req.body.name,
		    pemail = req.body.email,
				pidfacebook = req.body.idfacebook;

		if (paramsIsNull(pname,pemail)) {
			res.sendStatus(200);
			res.end();
			console.log('All needed params not found');
			return;
		}

		User.sync().then(function() {
			var data = {
				name:  pname,
				email: pemail,
				idfacebook: pidfacebook,
				blacklistcount: 0,
				status: 'A'
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
