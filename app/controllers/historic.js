module.exports = function(app) {

	var Historic = app ? app.models.historic : null;
	var controller = {};

  controller.create = function(req, res) {
  	console.log("req.body.userid");
  	console.log(req.body.userid);
    var puserid = req.body.userid,
		pdate = req.body.date;

		Historic.sync().then(function() {
			var data = { userid:  puserid, date: pdate }
			Historic.create(data)
			.then(function(newHistoric) {
				res.json(newHistoric);
      		});
    	});

    res.sendStatus(200);
    res.end();

  };

	controller.read = function(req, res) {

		Historic.findAll({
		    	order: [['date','DESC']]			
		}).then(function(historics) {
			res.json(historics);
		});
	};

	controller.delete = function(req, res) {

	};

	return controller;

};
