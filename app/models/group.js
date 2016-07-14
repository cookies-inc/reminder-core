"use strict";

module.exports = function(app) {
  var db = app.get('db');
  var DataTypes = app.get('sequelize');

  var Group = db.define('Group', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    }
  }, {
    classMethod: {
      associate: function(models) {
        //User.hasMany(models)//
      }
    }
  }
);
  return Group;
};
