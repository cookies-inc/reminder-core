module.exports = function(app) {

	var Historic = app ? app.models.historic : null;
	var controller = {};

  controller.create = function(req, res) {
    var puserid = req.body.userid,
				pdate = req.body.date;

  Historic.sync().then(function() {
    var data = {
      userid:  puserid,
      date: pdate
    }

    Historic.create(data).then(function(newHistoric) {
      console.log(newHistoric.get({
        plain: true
      }));
    });
  });

  res.sendStatus(200);
  res.end();

  }

};
