module.exports = function(app) {

  var controller = app.controllers.week;

  app.route('/week/users')
  .get(controller.usersOfWeek)
 

 // app.route('/historical/:id')
 // .get(controller.read)
 // .delete(controller.delete);

  return app;

};