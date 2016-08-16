"use strict";

module.exports = function(app) {

  var db = app.get('db');
  var DataTypes = app.get('sequelize');

  var blacklist = db.define('Blacklist', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userid: {
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATE
    },
    done: {
      type: DataTypes.BOOLEAN
    }
  });

  return blacklist;

};