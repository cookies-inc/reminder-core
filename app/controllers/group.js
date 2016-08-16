"use strict";

module.exports = function(app) {
	var Group  = app.models.group;
	var controller = {};

	controller.getAll = function() {
		console.log('Ola');
	};

 	controller.create = function(req, res) {
		var ptitle = req.body.title;

		if (!ptitle) {
			res.sendStatus(200);
			res.end();
			console.log('All needed params not found');
			return;
		}

		Group.sync().then(function() {
			var data = {
				title:  ptitle
			}
			Group.create(data).then(function(newUser) {
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
			 Group.findAll({
				 where: {
					 id: idParam
				 }
			 }).then(function(user) {
				 res.json(user);
			 });
		 } else {
			 Group.findAll().then(function(user) {
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
			Group.destroy({
				where: {
	      id: cod
	    }}).then(function(result) {
				console.log(result);
	    });
		}
	};

	return controller;

}
