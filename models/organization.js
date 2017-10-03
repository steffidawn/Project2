'use strict';
module.exports = (sequelize, DataTypes) => {
  var organization = sequelize.define('organization', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    about: DataTypes.STRING,
    cause: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return organization;
};