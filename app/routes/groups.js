"use strict";

module.exports = function(app) {

  var controller = app.controllers.group;

  app.route('/groups')
  .get(controller.read)
  .post(controller.create);

  app.route('/groups/:id')
  .get(controller.read)
  .delete(controller.delete);

  return app;

};
