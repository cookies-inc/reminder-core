
module.exports = function(app) {

  	var controller = app.controllers.home;

  	app.route('/')
  	  .get(controller.home);
  	  //.post(controller.saveUser);

  	// app.route('/contatos/:id')
  	//   .get(contatoController.obtemContato)
  	//   .delete(contatoController.removeContato);

  	return app;

}
