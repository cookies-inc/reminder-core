module.exports = function(app) {

  var controller = app.controllers.user;

  app.route('/users')
  .get(controller.read)
  .post(controller.create);

  app.route('/users/:id')
  .get(controller.read)
  .delete(controller.delete);

  return app;

};
