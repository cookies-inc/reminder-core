module.exports = function(app) {

  var controller = app.controllers.historic;

  app.route('/historical')
  .get(controller.read)
  .post(controller.create);

  app.route('/historical/:id')
  .get(controller.read)
  .delete(controller.delete);

  return app;

};
