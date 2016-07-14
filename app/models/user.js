"use strict";

module.exports = function(app) {

  var db = app.get('db');
  var DataTypes = app.get('sequelize');

  var User = db.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true }
    },
    password: {
      type: DataTypes.STRING
    },
    idfacebook: {
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
  return User;
};
