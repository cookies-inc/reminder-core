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
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true }
    },
    idfacebook: {
      type: DataTypes.STRING
    },
    blacklistcount: {
      type: DataTypes.INTEGER
    },
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
